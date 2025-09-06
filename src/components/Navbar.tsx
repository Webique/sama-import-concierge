import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/logo1.webp';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'mission', href: '#mission' },
    { key: 'values', href: '#values' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Show background when not at the very top
          setScrolled(currentScrollY > 0);
          
          // Hide navbar when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsScrolling(true);
          } else {
            setIsScrolling(false);
          }
          
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolling 
          ? '-translate-y-full' 
          : 'translate-y-0'
      } bg-background/95 backdrop-blur-xl border-b border-accent/20 shadow-2xl shadow-accent/10`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Al-Sama Logo" 
                className="h-10 md:h-12 w-auto transition-all duration-300 hover:scale-105" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Language Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="flex items-center space-x-2 rtl:space-x-reverse"
              >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-accent/20 shadow-2xl transform transition-all duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Navigation Links */}
          <div className="p-6 space-y-4">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-accent transition-colors duration-200 font-medium text-lg hover:bg-accent/5 rounded-lg"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}