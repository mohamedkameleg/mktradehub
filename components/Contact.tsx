import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t, dir } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold text-lg mb-2 uppercase tracking-wider">{t.contact.title}</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            {t.contact.heading}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 flex items-start gap-4 shadow-sm">
              <div className="bg-slate-50 p-3 rounded-full shadow-sm text-primary border border-slate-100">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t.contact.info.address.label}</h4>
                <p className="text-slate-600">{t.contact.info.address.value}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 flex items-start gap-4 shadow-sm">
              <div className="bg-slate-50 p-3 rounded-full shadow-sm text-primary border border-slate-100">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t.contact.info.phone.label}</h4>
                <p className="text-slate-600" dir="ltr">{t.contact.info.phone.value}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 flex items-start gap-4 shadow-sm">
              <div className="bg-slate-50 p-3 rounded-full shadow-sm text-primary border border-slate-100">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t.contact.info.email.label}</h4>
                <p className="text-slate-600">{t.contact.info.email.value}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 flex items-start gap-4 shadow-sm">
              <div className="bg-slate-50 p-3 rounded-full shadow-sm text-primary border border-slate-100">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">{t.contact.info.hours.label}</h4>
                <p className="text-slate-600">{t.contact.info.hours.value}</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
            
            {formStatus === 'success' && (
              <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center text-center p-8 animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">{t.contact.form.successMessage}</h4>
              </div>
            )}

            <h4 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.form.title}</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.phone}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.service}</label>
                <select 
                  id="subject" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                >
                  <option value="">{t.contact.form.serviceOptions.default}</option>
                  <option value="import">{t.contact.form.serviceOptions.import}</option>
                  <option value="export">{t.contact.form.serviceOptions.export}</option>
                  <option value="logistics">{t.contact.form.serviceOptions.logistics}</option>
                  <option value="other">{t.contact.form.serviceOptions.other}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.message}</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className={`w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark focus:ring-4 focus:ring-primary/20 transition-all flex items-center justify-center gap-2 ${formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {formStatus === 'sending' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;