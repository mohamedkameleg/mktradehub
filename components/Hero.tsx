import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?q=80&w=2070&auto=format&fit=crop" 
          alt="Container Ship Blue" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for Text Readability - Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/60 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
        <div className={`space-y-6 max-w-3xl ${isRtl ? 'ms-auto' : 'me-auto'}`}>
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white border border-white/30 text-sm font-bold tracking-wide mb-2 animate-fade-in-up">
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            {t.hero.title} <br />
            <span className="text-slate-100">
              {t.hero.tagline}
            </span>
          </h1>
          <p className={`mt-4 text-xl text-slate-100 max-w-2xl leading-relaxed font-light ${isRtl ? 'ms-auto' : 'me-auto'}`}>
            {t.hero.description}
          </p>
          
          <div className={`mt-8 flex flex-col sm:flex-row gap-4 ${isRtl ? 'justify-end' : 'justify-start'}`}>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-primary bg-white hover:bg-slate-100 transition-transform transform hover:-translate-y-1 shadow-lg"
            >
              {t.hero.contactBtn}
              <ArrowIcon className={`h-5 w-5 ${isRtl ? 'ms-2' : 'ml-2'}`} />
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-lg font-bold rounded-lg text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              {t.hero.servicesBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;