import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Handshake, 
  Truck, 
  Car, 
  FileText, 
  Shield, 
  Building, 
  Search,
  CheckCircle
} from 'lucide-react';
import servicesBg from '@/assets/services-bg.jpg';

export function Services() {
  const { t } = useLanguage();

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
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={servicesBg} 
          alt="Automotive services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('servicesTitle')}
            </h2>
            <div className="w-32 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t('language') === 'ar' 
                ? 'نقدم مجموعة شاملة من الخدمات المتخصصة في استيراد السيارات'
                : 'We offer a comprehensive range of specialized car import services'
              }
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`group flex items-center space-x-6 rtl:space-x-reverse p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/5 transition-all duration-500 hover:scale-[1.02] ${
                    isEven ? 'bg-white/5' : 'bg-black/20'
                  }`}
                >
                  {/* Service Number */}
                  <div className="text-4xl font-bold text-accent/30 min-w-[60px]">
                    {service.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start space-x-3 rtl:space-x-reverse">
                      <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <p className="text-white leading-relaxed font-medium text-lg">
                        {service.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-8 rtl:space-x-reverse bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-white/80">{t('language') === 'ar' ? 'سيارة مستوردة' : 'Cars Imported'}</p>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <p className="text-white/80">{t('language') === 'ar' ? 'دولة' : 'Countries'}</p>
              </div>
              <div className="w-px h-16 bg-white/20" />
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">98%</div>
                <p className="text-white/80">{t('language') === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}