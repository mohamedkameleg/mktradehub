import React, { useState } from 'react';
import { Container, Facebook, Linkedin, Twitter, Instagram, Send, Check, Loader2, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const isRtl = language === 'ar';
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-700/50">
          <div className="lg:w-1/2">
            <h4 className="text-white font-bold text-2xl mb-2">{t.newsletter.title}</h4>
            <p className="text-slate-400">{t.newsletter.description}</p>
          </div>
          <div className="lg:w-1/2 w-full">
             <form onSubmit={handleSubscribe} className="relative">
              <input 
                type="email" 
                placeholder={t.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 md:py-4 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all pr-32 rtl:pr-4 rtl:pl-32"
              />
              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className={`absolute top-1 bottom-1 ${isRtl ? 'left-1' : 'right-1'} bg-gold text-navy font-bold rounded-md px-6 hover:bg-gold-dark transition-all flex items-center justify-center gap-2 min-w-[120px] disabled:opacity-80 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{t.newsletter.submitting}</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>{t.newsletter.success}</span>
                  </>
                ) : (
                  <>
                    <span>{t.newsletter.button}</span>
                    <Send className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </>
                )}
              </button>
             </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white mb-4">
              <Container className="h-8 w-8 text-gold" />
              <span className="font-bold text-2xl">{t.companyName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className={`flex space-x-4 pt-2 ${isRtl ? 'space-x-reverse' : ''}`}>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-gold hover:text-navy transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-gold transition-colors text-sm">{t.nav.home}</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors text-sm">{t.nav.about}</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors text-sm">{t.nav.services}</a></li>
              <li><a href="#stats" className="hover:text-gold transition-colors text-sm">{t.nav.stats}</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors text-sm">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.servicesTitle}</h4>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((serviceName, index) => (
                <li key={index}><a href="#" className="hover:text-gold transition-colors text-sm">{serviceName}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gold">
                    <Phone size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-tighter text-slate-500">{t.contact.info.phone.label}</span>
                    <span dir="ltr" className="font-bold text-white">{t.contact.info.phone.value}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-gold">
                    <Phone size={14} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-tighter text-slate-500">{t.contact.info.phoneUAE.label}</span>
                    <span dir="ltr" className="font-bold text-white">{t.contact.info.phoneUAE.value}</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3 border-t border-slate-800 pt-3">
                <span className="text-gold font-bold">{t.contact.info.email.label}:</span>
                <span className="break-all">{t.contact.info.email.value}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold">{t.contact.info.address.label}:</span>
                <span>{t.contact.info.address.value}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm text-slate-500 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            © {new Date().getFullYear()} {t.companyName}. {t.footer.copyright}
          </p>
          <div className={`flex space-x-6 text-sm text-slate-500 ${isRtl ? 'space-x-reverse' : ''}`}>
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;