import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext.tsx';

const About: React.FC = () => {
  const { t, dir } = useLanguage();

  const featureIcons = [ShieldCheck, Zap, Award, CheckCircle2];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" dir={dir}>
      {/* عناصر زخرفية خلفية */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4 inline-block">{t.about.title}</span>
          <h3 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight max-w-4xl mx-auto">
            {t.about.heading}
          </h3>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-right">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              {t.about.description1}
            </p>
            <p className="text-slate-500 leading-relaxed font-light text-lg">
              {t.about.description2}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {t.about.points.map((item, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-gold/30 transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <span className="text-navy font-bold text-sm leading-relaxed block">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;