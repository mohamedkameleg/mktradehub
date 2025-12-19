import React from 'react';
import About from './About.tsx';
import Stats from './Stats.tsx';
import Contact from './Contact.tsx';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const AboutPage: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="pt-0 min-h-screen bg-slate-100" dir={dir}>
      {/* Header بدون صورة */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            {t.nav.about}
          </h1>
          <div className="flex items-center justify-center gap-3 text-gold text-sm font-bold uppercase tracking-widest">
             <span className="opacity-60">{t.nav.home}</span>
             <span className="opacity-30">/</span>
             <span className="text-white">{t.nav.about}</span>
          </div>
        </div>
      </div>

      <About />
      
      <div className="bg-slate-100 py-12">
        <Stats />
      </div>

      <Contact />
    </div>
  );
};

export default AboutPage;