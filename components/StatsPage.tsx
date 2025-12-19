import React from 'react';
import Stats from './Stats';
import About from './About';
import Contact from './Contact';
import { useLanguage } from '../contexts/LanguageContext';

const StatsPage: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="pt-0 min-h-screen bg-slate-100" dir={dir}>
      {/* Page Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Stats Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/80 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t.nav.stats}
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-200 text-sm font-medium">
             <span>{t.nav.home}</span>
             <span>/</span>
             <span className="text-white">{t.nav.stats}</span>
          </div>
        </div>
      </div>

      {/* Why Us / Stats Content */}
      <div className="py-12">
        <About /> {/* Reusing About content as it contains 'Why Us' points */}
      </div>
      
      <div className="mb-12">
        <Stats />
      </div>

      {/* Contact Section at bottom */}
      <Contact />
    </div>
  );
};

export default StatsPage;