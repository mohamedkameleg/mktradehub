import React, { useState, useEffect } from 'react';
import { Menu, X, Container, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t, language, setLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'stats', 'about', 'services', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(id);
  };

  const navLinks = [
    { id: 'home', name: t.nav.home },
    { id: 'stats', name: t.nav.stats },
    { id: 'about', name: t.nav.about },
    { id: 'services', name: t.nav.services },
    { id: 'contact', name: t.nav.contact },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`} dir={dir}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <Container className={`h-8 w-8 transition-colors ${isScrolled ? 'text-navy' : 'text-gold'}`} />
            <span className={`font-black text-2xl tracking-tighter transition-colors ${isScrolled ? 'text-navy' : 'text-white'}`}>
              MK <span className="text-gold">Trade Hub</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`text-sm font-bold uppercase tracking-widest transition-all relative py-2 ${
                    isScrolled ? 'text-slate-800 hover:text-navy' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded-full animate-fade-in-up"></span>
                  )}
                </a>
              ))}
            </div>

            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-6 py-2 rounded-full font-black text-xs transition-all shadow-md ${
                isScrolled ? 'bg-navy text-white' : 'bg-gold text-navy'
              }`}
            >
              <Languages size={14} />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-navy' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-2xl absolute w-full top-full left-0 border-t border-slate-100 animate-fade-in-up">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-lg font-black text-navy border-b border-slate-50 pb-2 ${language === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { toggleLanguage(); setIsOpen(false); }}
              className="bg-gold text-navy py-4 rounded-xl font-black text-center"
            >
              {language === 'ar' ? 'English' : 'عربي'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;