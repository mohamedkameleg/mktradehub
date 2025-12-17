import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <section id="services" className="py-20 bg-slate-100 relative overflow-hidden" dir={dir}>
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 -mr-64 -mt-64 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-64 -mb-64 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold text-lg mb-2 uppercase tracking-wider">{t.services.title}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t.services.heading}
          </h3>
          <p className="text-lg text-slate-600">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service) => (
            <div 
              key={service.id} 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;