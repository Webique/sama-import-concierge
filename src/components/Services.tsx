import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Handshake, 
  Truck, 
  Car, 
  FileText, 
  Shield, 
  Building, 
  Search
} from 'lucide-react';

export function Services() {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Handshake,
      title: t('service1'),
      number: '01'
    },
    {
      icon: Truck,
      title: t('service2'),
      number: '02'
    },
    {
      icon: Car,
      title: t('service3'),
      number: '03'
    },
    {
      icon: FileText,
      title: t('service4'),
      number: '04'
    },
    {
      icon: Shield,
      title: t('service5'),
      number: '05'
    },
    {
      icon: Building,
      title: t('service6'),
      number: '06'
    },
    {
      icon: Search,
      title: t('service7'),
      number: '07'
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('servicesTitle')}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة في استيراد السيارات'
                : 'We offer a comprehensive range of specialized car import services'
              }
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div 
                  key={index}
                  className="flex items-center gap-6 py-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 transition-colors duration-300 rounded-lg px-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <div className="text-2xl font-bold text-accent/30">
                      {service.number}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-white/70 font-medium">
                {language === 'ar' ? 'سيارة مستوردة' : 'Cars Imported'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
              <p className="text-white/70 font-medium">
                {language === 'ar' ? 'دولة' : 'Countries'}
              </p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-white/70 font-medium">
                {language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}