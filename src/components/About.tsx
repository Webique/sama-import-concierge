import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Users, Award } from 'lucide-react';

export function About() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: language === 'ar' ? 'الثقة والأمان' : 'Trust & Security',
      description: language === 'ar' ? 'نضمن حقوقك بعقود رسمية' : 'We protect your rights with official contracts'
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'الالتزام بالمواعيد' : 'Timely Delivery',
      description: language === 'ar' ? 'متابعة دقيقة لجميع مراحل الاستيراد' : 'Precise tracking of all import stages'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'خدمة العملاء' : 'Customer Service',
      description: language === 'ar' ? 'فريق متخصص لخدمتك على مدار الساعة' : 'Specialized team serving you 24/7'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'الجودة العالية' : 'High Quality',
      description: language === 'ar' ? 'نختار أفضل السيارات بأسعار منافسة' : 'We select the best cars at competitive prices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('aboutTitle')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {t('aboutContent')}
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 shadow-elegant">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-accent">5+</div>
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="feature-card text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}