import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.webp';
import { 
  Phone, 
  Mail, 
  MessageCircle,
  Twitter,
  Music2
} from 'lucide-react';

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'mission', href: '#mission' },
    { key: 'values', href: '#values' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  const contactInfo = [
    {
      icon: Phone,
      value: '+966 565848380',
      href: 'tel:+966565848380'
    },
    {
      icon: Mail,
      value: 'smaacar55@gmail.com',
      href: 'mailto:smaacar55@gmail.com'
    },
    {
      icon: MessageCircle,
      value: 'WhatsApp',
      href: 'https://wa.me/966565848380'
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: 'https://twitter.com/alsmaacars'
    },
    {
      icon: Music2,
      href: 'https://tiktok.com/@alsmaacars'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} alt="Al-Sama Logo" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-lg">
                  {language === 'ar' ? 'مؤسسة سما التوريد' : 'Al-Sama Import'}
                </h3>
                <p className="text-sm opacity-80">
                  {language === 'ar' ? 'لخدمات السيارات' : 'Car Import Services'}
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('footerTagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contactInfo')}</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 rtl:space-x-reverse text-sm opacity-80 hover:opacity-100 transition-opacity duration-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{contact.value}</span>
                  </a>
                );
              })}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 rtl:space-x-reverse mt-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-80">
            {t('copyright')} {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}