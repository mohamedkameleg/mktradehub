import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

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
    <div className="relative h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background with subtle overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" 
          alt="Modern Professional Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/95 via-navy-dark/80 to-navy-dark/95" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-in-up">
        {/* Main Heading - Centered and calm */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
          {t.hero.title} <br />
          <span className="text-gold font-light block mt-4 text-4xl md:text-6xl">{t.hero.tagline}</span>
        </h1>
        
        {/* Description - Calmer font weight */}
        <p className="text-lg md:text-xl text-slate-200 mb-14 leading-relaxed font-light max-w-2xl mx-auto opacity-80">
          {t.hero.description}
        </p>
        
        {/* Buttons - Centered */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto bg-gold text-navy px-14 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-gold/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            {t.hero.contactBtn}
            <ArrowIcon size={20} />
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto border border-white/20 text-white px-14 py-5 rounded-2xl font-medium text-lg hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            {t.hero.servicesBtn}
          </button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;