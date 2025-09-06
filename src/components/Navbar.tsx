import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'mission', href: '#mission' },
    { key: 'values', href: '#values' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} alt="Al-Sama Logo" className="h-10 md:h-12 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-primary leading-tight">
                {language === 'ar' ? 'مؤسسة سما التوريد' : 'Al-Sama Import'}
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                {language === 'ar' ? 'لخدمات السيارات' : 'Car Import Services'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-accent transition-colors duration-200 font-medium"
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Language Toggle + Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
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

            {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-2 py-2 text-foreground hover:text-accent transition-colors duration-200 font-medium"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}