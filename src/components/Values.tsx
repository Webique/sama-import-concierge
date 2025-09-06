import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldCheck, 
  Clock, 
  Users, 
  Star, 
  Heart 
} from 'lucide-react';

export function Values() {
  const { t } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: t('value1'),
      color: 'text-blue-500'
    },
    {
      icon: Clock,
      title: t('value2'),
      color: 'text-green-500'
    },
    {
      icon: Users,
      title: t('value3'),
      color: 'text-purple-500'
    },
    {
      icon: Star,
      title: t('value4'),
      color: 'text-orange-500'
    },
    {
      icon: Heart,
      title: t('value5'),
      color: 'text-red-500'
    }
  ];

  return (
    <section id="values" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading">{t('valuesTitle')}</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="feature-card group hover:border-accent/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {value.title}
                    </h3>
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