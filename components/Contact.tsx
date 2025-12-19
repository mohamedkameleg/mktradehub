import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, dir, language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-gold font-bold text-xs uppercase tracking-widest mb-4 block">{t.contact.title}</span>
          <h3 className="text-3xl md:text-5xl font-black text-navy leading-tight">
            {t.contact.heading}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-5">
            {/* Egypt Branch - Changed to Navy */}
            <div className="bg-navy text-white p-8 rounded-3xl border border-navy shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-2xl text-gold">
                  <MapPin size={24} />
                </div>
                <h4 className="font-black text-white text-xl">{t.contact.info.address.label}</h4>
              </div>
              <p className="text-slate-300 leading-relaxed font-light mb-4">{t.contact.info.address.value}</p>
              <div className="flex items-center gap-2 text-gold font-bold" dir="ltr">
                <Phone size={16} />
                <span>{t.contact.info.phone.value}</span>
              </div>
            </div>

            {/* UAE Branch */}
            <div className="bg-navy text-white p-8 rounded-3xl border border-navy shadow-lg transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/10 p-3 rounded-2xl text-gold">
                  <Globe size={24} />
                </div>
                <h4 className="font-black text-white text-xl">{t.contact.info.addressUAE.label}</h4>
              </div>
              <p className="text-slate-300 leading-relaxed font-light mb-4">{t.contact.info.addressUAE.value}</p>
              <div className="flex items-center gap-2 text-gold font-bold" dir="ltr">
                <Phone size={16} />
                <span>{t.contact.info.phoneUAE.value}</span>
              </div>
            </div>

            {/* Common Info */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-navy/5 p-3 rounded-2xl text-navy">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-navy text-lg">{t.contact.info.email.label}</h4>
                  <p className="text-slate-600 font-medium">{t.contact.info.email.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-navy/5 p-3 rounded-2xl text-navy">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-black text-navy text-lg">{t.contact.info.hours.label}</h4>
                  <p className="text-slate-600 font-medium">{t.contact.info.hours.value}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 relative overflow-hidden">
            {formStatus === 'success' && (
              <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
                <h4 className="text-3xl font-black text-navy mb-3">{t.contact.form.successMessage}</h4>
              </div>
            )}

            <h4 className="text-2xl font-black text-navy mb-8">{t.contact.form.title}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mx-1">{t.contact.form.name}</label>
                  <input type="text" required className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 mx-1">{t.contact.form.phone}</label>
                  <input type="tel" required className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-slate-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mx-1">{t.contact.form.email}</label>
                <input type="email" required className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-slate-50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mx-1">{t.contact.form.service}</label>
                <select required className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-slate-50">
                  <option value="">{t.contact.form.serviceOptions.default}</option>
                  <option value="import">{t.contact.form.serviceOptions.import}</option>
                  <option value="logistics">{t.contact.form.serviceOptions.logistics}</option>
                  <option value="consultancy">{t.contact.form.serviceOptions.consultancy}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 mx-1">{t.contact.form.message}</label>
                <textarea rows={4} required className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-gold focus:border-gold outline-none transition-all bg-slate-50"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full py-5 bg-navy text-white font-black rounded-2xl hover:bg-navy-dark transition-all flex items-center justify-center gap-3 shadow-lg shadow-navy/10"
              >
                {formStatus === 'sending' ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                {formStatus === 'sending' ? t.contact.form.sending : t.contact.form.submit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;