import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="about" className="py-24 bg-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="mb-16 lg:mb-0">
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 inline-block">{t.about.title}</span>
            <h3 className="text-4xl md:text-5xl font-black text-navy mb-10 leading-tight">
              {t.about.heading}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              {t.about.description1}
            </p>
            <p className="text-slate-500 mb-12 leading-relaxed font-light text-lg">
              {t.about.description2}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {t.about.points.map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-2">
                  <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <span className="text-slate-700 font-bold text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Container */}
          <div className="relative">
            <div className="rounded-[3.5rem] overflow-hidden shadow-2xl border border-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070" 
                alt="Logistics team" 
                className="w-full aspect-square object-cover"
              />
            </div>
            
            <div className={`absolute -bottom-10 ${isRtl ? '-left-10' : '-right-10'} bg-white p-10 text-navy rounded-[3rem] shadow-2xl border border-slate-50 z-10 flex flex-col items-center min-w-[180px]`}>
              <p className="text-5xl font-black mb-1 text-gold">{t.about.imageBadge.value}</p>
              <p className="text-[10px] font-black tracking-widest text-slate-400 uppercase text-center">{t.about.imageBadge.label}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;