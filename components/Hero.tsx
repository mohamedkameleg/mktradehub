import React from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const Hero: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-dark" dir={dir}>
      {/* خلفية بتدرج لوني ونمط شبكي بدلاً من الصور */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* دوائر ضوئية خافتة للجمالية */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-light/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        {/* شعار صغير علوي */}
        <div className="flex justify-center mb-8">
           <div className="bg-gold/10 px-4 py-2 rounded-full border border-gold/20 backdrop-blur-sm flex items-center gap-2">
             <ShieldCheck size={16} className="text-gold" />
             <span className="text-gold text-xs font-bold tracking-widest uppercase">Trusted Partner since 2016</span>
           </div>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
          {t.hero.title} <br />
          <span className="text-gold font-light block mt-4 text-3xl md:text-5xl lg:text-6xl italic">
            {t.hero.tagline}
          </span>
        </h1>
        
        {/* الوصف */}
        <p className="text-lg md:text-xl text-slate-300 mb-14 leading-relaxed font-light max-w-3xl mx-auto opacity-90">
          {t.hero.description}
        </p>
        
        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-gold text-navy px-14 py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-white hover:text-navy transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            {t.hero.contactBtn}
            <ArrowIcon size={20} />
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto border-2 border-white/20 text-white px-14 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Globe size={18} />
            {t.hero.servicesBtn}
          </button>
        </div>
      </div>

      {/* مؤشر تمرير سفلي */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] uppercase tracking-[0.5em]">{isRtl ? 'انزل للأسفل' : 'Scroll Down'}</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;