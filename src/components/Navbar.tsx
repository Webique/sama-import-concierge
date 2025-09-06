import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Sparkles, Zap } from 'lucide-react';
import logo from '@/assets/logo1.webp';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-accent/20 shadow-2xl shadow-accent/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Animation */}
            <div className="flex items-center group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="Al-Sama Logo" 
                  className="h-10 md:h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" 
                />
                {scrolled && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navigation.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-foreground hover:text-accent transition-all duration-300 font-medium group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{t(item.key)}</span>
                  <div className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
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
                className="relative overflow-hidden bg-accent/10 border-accent/30 hover:bg-accent/20 transition-all duration-300 group"
              >
                <Globe className="h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
                <span className="hidden sm:inline ml-2 font-semibold">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden relative overflow-hidden bg-accent/10 border-accent/30 hover:bg-accent/20 transition-all duration-300 group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="relative">
                  <Menu className={`h-5 w-5 transition-all duration-500 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                  <X className={`h-5 w-5 absolute inset-0 transition-all duration-500 ${isOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-background via-background/95 to-accent/5 backdrop-blur-xl border-l border-accent/20 shadow-2xl shadow-accent/10 transform transition-all duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-accent/20">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} alt="Al-Sama Logo" className="h-8 w-auto" />
              <div>
                <h3 className="font-bold text-lg text-foreground">
                  {language === 'ar' ? 'قائمة التنقل' : 'Menu'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'ar' ? 'استكشف موقعنا' : 'Explore our site'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="p-6 space-y-2">
            {navigation.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="group w-full text-left p-4 rounded-2xl bg-accent/5 hover:bg-accent/10 border border-accent/10 hover:border-accent/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {t(item.key)}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Zap className="h-4 w-4 text-accent group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-accent/20 bg-gradient-to-t from-accent/5 to-transparent">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent animate-pulse" />
              <span>{language === 'ar' ? 'مؤسسة سما التوريد' : 'Al-Sama Import'}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}