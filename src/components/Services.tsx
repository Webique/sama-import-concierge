import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
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
  const { t } = useLanguage();

  const services = [
    {
      icon: Handshake,
      title: t('service1'),
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Truck,
      title: t('service2'),
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Car,
      title: t('service3'),
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: FileText,
      title: t('service4'),
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Shield,
      title: t('service5'),
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: Building,
      title: t('service6'),
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Search,
      title: t('service7'),
      color: 'bg-pink-50 text-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('servicesTitle')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="feature-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground leading-relaxed">
                          {service.title}
                        </p>
                      </div>
                    </div>
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