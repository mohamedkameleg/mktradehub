import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="stats" className="py-16 bg-navy text-white relative" dir={dir}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 text-center ${isRtl ? 'divide-x divide-x-reverse' : 'divide-x'} divide-white/20 md:divide-x-0`}>
          {t.stats.items.map((stat) => (
            <div key={stat.id} className="p-4">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2" dir="ltr">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-lg text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;