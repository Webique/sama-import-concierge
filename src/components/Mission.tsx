import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Zap, Globe } from 'lucide-react';

export function Mission() {
  const { language, t } = useLanguage();

  const missionPoints = [
    {
      icon: Target,
      title: language === 'ar' ? 'هدفنا الأساسي' : 'Our Core Goal',
      description: language === 'ar' ? 'توفير أفضل السيارات بأسعار منافسة' : 'Providing the best cars at competitive prices'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'الكفاءة والسرعة' : 'Efficiency & Speed',
      description: language === 'ar' ? 'عملية استيراد سريعة وآمنة' : 'Fast and secure import process'
    },
    {
      icon: Globe,
      title: language === 'ar' ? 'التوسع العالمي' : 'Global Expansion',
      description: language === 'ar' ? 'من كوريا إلى جميع أنحاء العالم' : 'From Korea to worldwide destinations'
    }
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">{t('missionTitle')}</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12 rounded-full" />
          
          <div className="bg-gradient-subtle rounded-3xl p-8 md:p-12 mb-16 shadow-elegant">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-medium">
              {t('missionContent')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}