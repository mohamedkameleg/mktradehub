import React, { useState } from 'react';
import { Ship, Anchor, ArrowRight, ArrowLeft, Calculator } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FreightCalculator: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const isRtl = language === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [containerType, setContainerType] = useState('20ft');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin || !destination) return;

    setLoading(true);
    setResult(null);

    // Simulate API calculation delay
    setTimeout(() => {
      const basePrice = Math.floor(Math.random() * (4000 - 1500 + 1)) + 1500;
      const variance = Math.floor(Math.random() * 500) + 200;
      
      setResult({
        min: basePrice,
        max: basePrice + variance
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-navy p-6 text-white text-center">
        <Calculator className="h-10 w-10 mx-auto mb-3 opacity-90" />
        <h3 className="text-2xl font-bold">{t.quote.title}</h3>
        <p className="text-blue-100 text-sm mt-1">{t.quote.subtitle}</p>
      </div>

      <div className="p-8">
        <form onSubmit={handleCalculate} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Anchor className="h-4 w-4 text-navy" />
                {t.quote.origin}
              </label>
              <input 
                type="text" 
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Ex: Shanghai, China"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all bg-slate-50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Anchor className="h-4 w-4 text-gold" />
                {t.quote.destination}
              </label>
              <input 
                type="text" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ex: Alexandria, Egypt"
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all bg-slate-50"
              />
            </div>

            <div className={`hidden md:flex absolute top-10 left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400 z-10 border border-slate-200`}>
              <ArrowIcon className="h-4 w-4" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 flex items-center gap-2">
              <Ship className="h-4 w-4 text-navy" />
              {t.quote.containerType}
            </label>
            <select 
              value={containerType}
              onChange={(e) => setContainerType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy focus:border-navy outline-none transition-all bg-white"
            >
              <option value="20ft">{t.quote.containerOptions.bg20}</option>
              <option value="40ft">{t.quote.containerOptions.bg40}</option>
              <option value="40hc">{t.quote.containerOptions.hq40}</option>
              <option value="lcl">{t.quote.containerOptions.lcl}</option>
            </select>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 bg-gold text-white font-bold rounded-lg hover:bg-gold-dark transition-all shadow-md flex items-center justify-center gap-2 ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {loading ? t.quote.calculating : t.quote.calculateBtn}
          </button>
        </form>

        {result && (
          <div className="mt-8 animate-fade-in-up">
            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-bold mb-4">{t.quote.resultTitle}</h4>
              <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                
                <div className="flex items-center justify-center gap-1 text-green-700 font-extrabold text-4xl mb-2">
                  <span className="text-2xl mt-2">$</span>
                  <span>{result.min}</span>
                  <span className="text-green-400 mx-2">-</span>
                  <span className="text-2xl mt-2">$</span>
                  <span>{result.max}</span>
                </div>
                <p className="text-green-600 font-medium mb-4 text-sm uppercase">{t.quote.currency}</p>
                
                <div className="bg-white/60 rounded-lg p-3 text-xs text-slate-500 leading-relaxed">
                  {t.quote.note}
                </div>

                <a 
                  href="#contact" 
                  className="mt-4 inline-block text-navy font-bold hover:underline text-sm"
                >
                  {t.quote.contactUs}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreightCalculator;