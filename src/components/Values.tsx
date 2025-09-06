import { useLanguage } from '@/contexts/LanguageContext';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Star, 
  Heart,
  Award,
  Target,
  Zap
} from 'lucide-react';
export function Values() {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: t('value1'),
      description: language === 'ar' 
        ? 'نعمل بشفافية كاملة ونضمن حقوق عملائنا في جميع المراحل' 
        : 'We work with complete transparency and guarantee our clients\' rights at every stage'
    },
    {
      icon: Clock,
      title: t('value2'),
      description: language === 'ar' 
        ? 'نلتزم بالمواعيد المحددة ونضمن تسليم السيارات في الوقت المناسب' 
        : 'We meet deadlines and ensure timely delivery of vehicles'
    },
    {
      icon: Users,
      title: t('value3'),
      description: language === 'ar' 
        ? 'نقدم حلول مخصصة تناسب احتياجات الأفراد والمعارض التجارية' 
        : 'We provide customized solutions for individuals and commercial dealers'
    },
    {
      icon: Star,
      title: t('value4'),
      description: language === 'ar' 
        ? 'نختار أفضل السيارات من أفضل المصادر بمعايير جودة عالية' 
        : 'We select the finest vehicles from the best sources with high quality standards'
    },
    {
      icon: Heart,
      title: t('value5'),
      description: language === 'ar' 
        ? 'نسعى لبناء علاقات طويلة الأمد مع عملائنا تقوم على الثقة والاحترام' 
        : 'We strive to build long-term relationships with our clients based on trust and respect'
    }
  ];

  return (
    <section id="values" className="relative py-32 overflow-hidden bg-gradient-to-br from-primary via-plum-gray to-primary">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('valuesTitle')}
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'القيم التي نؤمن بها والتي تشكل أساس عملنا وعلاقاتنا مع عملائنا'
                : 'The values we believe in that form the foundation of our work and relationships with our clients'
              }
            </p>
          </div>

          {/* Values Display */}
          <div className="space-y-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isOdd = index % 2 === 1;
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    isOdd ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-accent/30">
                        <Icon className="h-16 w-16 text-accent" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '100%', label: language === 'ar' ? 'الشفافية' : 'Transparency' },
              { number: '24/7', label: language === 'ar' ? 'الدعم' : 'Support' },
              { number: '5+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
              { number: '∞', label: language === 'ar' ? 'الثقة' : 'Trust' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-white/70 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}