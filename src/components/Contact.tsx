import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MessageCircle,
  Twitter,
  Music2
} from 'lucide-react';

export function Contact() {
  const { language, t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      label: t('phone'),
      value: '+966 565848380',
      href: 'tel:+966565848380',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'smaacar55@gmail.com',
      href: 'mailto:smaacar55@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+966 565848380',
      href: 'https://wa.me/966565848380',
      color: 'text-green-500'
    }
  ];

  const socialLinks = [
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/alsmaacars',
      color: 'text-blue-400'
    },
    {
      icon: Music2,
      name: 'TikTok',
      href: 'https://tiktok.com/@alsmaacars',
      color: 'text-pink-500'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/966565848380', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('contactTitle')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground">
              {t('contactCta')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="feature-card">
                    <CardContent className="p-6">
                      <a 
                        href={method.href}
                        className="flex items-center space-x-4 rtl:space-x-reverse group"
                      >
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{method.label}</p>
                          <p className="text-muted-foreground text-sm">{method.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Social Links & CTA */}
            <div className="space-y-6">
              <Card className="feature-card">
                <CardContent className="p-8 text-center">
                  <h3 className="font-semibold text-xl mb-4 text-foreground">
                    {language === 'ar' ? 'تابعنا على' : 'Follow Us'}
                  </h3>
                  <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-6">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                        >
                          <Icon className="h-6 w-6 text-accent" />
                        </a>
                      );
                    })}
                  </div>
                  <Button 
                    onClick={handleWhatsApp}
                    className="btn-hero w-full"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    {t('whatsappNow')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}