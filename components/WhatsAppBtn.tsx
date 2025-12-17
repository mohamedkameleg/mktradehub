import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppBtn: React.FC = () => {
  const { t, language } = useLanguage();
  const isRtl = language === 'ar';
  
  // Replace with your actual WhatsApp number
  const phoneNumber = "201000450590"; 
  const message = isRtl ? "مرحباً، لدي استفسار بخصوص خدماتكم." : "Hello, I have an inquiry about your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${isRtl ? 'left-6' : 'right-6'} z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex items-center gap-2`}
      aria-label={t.whatsapp.label}
    >
      <MessageCircle className="h-8 w-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">
        {t.whatsapp.label}
      </span>
    </a>
  );
};

export default WhatsAppBtn;