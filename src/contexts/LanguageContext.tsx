import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    mission: "Mission", 
    values: "Values",
    services: "Services",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Your Trusted Partner in Car Imports",
    heroSubtitle: "From Korea and beyond — sourcing, shipping, and delivering your car to your doorstep.",
    heroCta: "Start Your Import Journey",
    
    // About Section
    aboutTitle: "About Al-Sama",
    aboutContent: "We are a Saudi company specialized in brokerage and car import services from Korea and other countries. Our process covers car selection, purchase from auctions or dealers, shipment, customs clearance, and delivery directly to the client. Transparency and client trust are at the core of everything we do.",
    
    // Mission Section
    missionTitle: "Our Mission",
    missionContent: "To empower individuals and dealerships with high-quality cars at competitive prices, offering a smooth, secure, and transparent import process.",
    
    // Values Section
    valuesTitle: "Our Values",
    value1: "Trust & Transparency",
    value2: "Commitment to Deadlines", 
    value3: "Flexible Solutions for Individuals & Dealers",
    value4: "High-Quality Car Selection",
    value5: "Long-Term Client Relationships",
    
    // Services Section
    servicesTitle: "Our Services",
    service1: "Brokerage for car purchases from Korean auctions & dealerships.",
    service2: "Full follow-up of purchase, shipping, and customs clearance.",
    service3: "Import of all car types (Korean, German, Japanese).",
    service4: "Reports, photos, and videos documenting the shipping process.",
    service5: "Official contracts safeguarding all parties.",
    service6: "Supply options for individuals, dealerships, and showrooms.",
    service7: "Research for the best competitive offers.",
    
    // Contact Section
    contactTitle: "Contact Us",
    contactCta: "Contact us today and start importing your dream car.",
    whatsappNow: "WhatsApp Now",
    phone: "Phone",
    email: "Email",
    
    // Footer
    footerTagline: "Reliable Car Import Services from Korea & Beyond.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information",
    copyright: "© Al-Sama Car Import Services",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    mission: "رسالتنا",
    values: "هويتنا", 
    services: "خدماتنا",
    contact: "تواصل معنا",
    
    // Hero Section
    heroTitle: "شريكك الموثوق في استيراد السيارات",
    heroSubtitle: "من كوريا وغيرها — نختار، نشحن، ونوصّل سيارتك حتى باب منزلك.",
    heroCta: "ابدأ رحلة الاستيراد",
    
    // About Section
    aboutTitle: "عن مؤسسة سما",
    aboutContent: "نحن مؤسسة سعودية متخصصة في الوساطة وخدمات استيراد السيارات من كوريا ودول أخرى. تشمل خدماتنا اختيار السيارة، الشراء من المزادات أو المعارض، متابعة الشحن والتخليص الجمركي، وتسليمها حتى باب العميل. نضع ثقة العميل وراحته في مقدمة أولوياتنا، ونعمل بأعلى مستويات الشفافية والمصداقية.",
    
    // Mission Section
    missionTitle: "رسالتنا",
    missionContent: "تمكين الأفراد والمعارض من الحصول على سيارات مميزة بجودة عالية وأسعار منافسة، مع تقديم تجربة استيراد سهلة وآمنة تقوم على الثقة والوضوح.",
    
    // Values Section
    valuesTitle: "هويتنا",
    value1: "الثقة والشفافية",
    value2: "الالتزام بالمواعيد",
    value3: "حلول مرنة للأفراد والمعارض", 
    value4: "اختيار سيارات عالية الجودة",
    value5: "بناء علاقات طويلة الأمد",
    
    // Services Section
    servicesTitle: "خدماتنا",
    service1: "وساطة في شراء السيارات من المزادات والمعارض في كوريا.",
    service2: "المتابعة الكاملة لعملية الشراء والشحن والتخليص الجمركي.",
    service3: "استيراد جميع أنواع السيارات (كوري، ألماني، ياباني).",
    service4: "تقديم تقارير وصور وفيديوهات توثق مراحل شحن السيارة.",
    service5: "عقود رسمية تحفظ حقوق جميع الأطراف.",
    service6: "إمكانية التوريد للأفراد والمعارض والصالات.",
    service7: "خدمة البحث عن أفضل العروض والأسعار التنافسية.",
    
    // Contact Section
    contactTitle: "تواصل معنا",
    contactCta: "تواصل معنا اليوم وابدأ استيراد سيارتك المميزة.",
    whatsappNow: "واتساب الآن",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    
    // Footer
    footerTagline: "خدمات استيراد سيارات موثوقة من كوريا ودول أخرى.",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات التواصل",
    copyright: "© مؤسسة سما التوريد لخدمات السيارات",
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set document direction based on language
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Apply font class to body
    document.body.className = language === 'ar' ? 'text-arabic' : 'text-english';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}