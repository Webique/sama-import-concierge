import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export function Hero() {
  const { language, t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/966565848380', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-8">
            {t('heroTitle')}
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>
          
          <Button
            onClick={handleWhatsApp}
            className="btn-hero group"
            size="lg"
          >
            <span>{t('heroCta')}</span>
            {language === 'ar' ? (
              <ArrowLeft className="ml-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}