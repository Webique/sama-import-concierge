import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import heroAutomotive from '@/assets/hero-automotive.jpg';

export function Hero() {
  const { language, t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/966565848380', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroAutomotive} 
          alt="Luxury car import services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          <div className="space-y-8 text-white">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block">{t('heroTitle').split(' ').slice(0, 2).join(' ')}</span>
              <span className="block text-accent">
                {t('heroTitle').split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-2xl leading-relaxed font-light">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button
                onClick={handleWhatsApp}
                className="btn-hero text-lg px-8 py-6 group"
                size="lg"
              >
                <span>{t('heroCta')}</span>
                {language === 'ar' ? (
                  <ArrowLeft className="ml-3 h-6 w-6 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}