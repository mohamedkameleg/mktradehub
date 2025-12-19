import React from 'react';
import FreightCalculator from './FreightCalculator';
import Contact from './Contact';
import { useLanguage } from '../contexts/LanguageContext';

const QuotePage: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="pt-0 min-h-screen bg-slate-50" dir={dir}>
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=2090&auto=format&fit=crop" 
            alt="Shipping Calculator Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.quote.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium">
             <span>{t.nav.home}</span>
             <span>/</span>
             <span className="text-white">{t.quote.title}</span>
          </div>
        </div>
      </div>

      <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20 z-20">
        <FreightCalculator />
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{t.about.heading}</h3>
            <p className="text-slate-600 mb-6">{t.about.description2}</p>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default QuotePage;