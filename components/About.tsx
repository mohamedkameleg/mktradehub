import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="about" className="py-20 bg-slate-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-secondary font-bold text-lg mb-2 uppercase tracking-wider">{t.about.title}</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {t.about.heading}
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            <ul className="space-y-4">
              {t.about.points.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className={`h-6 w-6 text-secondary flex-shrink-0 mt-1 ${isRtl ? 'ml-3' : 'mr-3'}`} />
                  <span className="text-slate-700 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                alt="Logistics warehouse" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className={`absolute bottom-0 bg-primary/90 text-white p-6 backdrop-blur-md ${isRtl ? 'right-0 rounded-tl-3xl' : 'left-0 rounded-tr-3xl'}`}>
                <p className="text-3xl font-bold mb-1">{t.about.imageBadge.value}</p>
                <p className="text-sm font-medium text-slate-200">{t.about.imageBadge.label}</p>
              </div>
            </div>
            
            {/* Decorative Dot Pattern */}
            <div className={`absolute -z-10 -bottom-6 w-24 h-24 text-secondary/20 ${isRtl ? '-left-6' : '-right-6'}`}>
              <svg fill="currentColor" viewBox="0 0 24 24">
                <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;