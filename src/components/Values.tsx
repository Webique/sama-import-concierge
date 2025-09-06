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
    <section id="values" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('valuesTitle')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'القيم التي نؤمن بها والتي تشكل أساس عملنا وعلاقاتنا مع عملائنا'
                : 'The values we believe in that form the foundation of our work and relationships with our clients'
              }
            </p>
          </div>

          {/* Values List */}
          <div className="space-y-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              
              return (
                <div 
                  key={index}
                  className="flex items-start gap-6 py-6 border-b border-gray-200 last:border-b-0"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200">
            {[
              { number: '100%', label: language === 'ar' ? 'الشفافية' : 'Transparency' },
              { number: '24/7', label: language === 'ar' ? 'الدعم' : 'Support' },
              { number: '3+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
              { number: '∞', label: language === 'ar' ? 'الثقة' : 'Trust' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">
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