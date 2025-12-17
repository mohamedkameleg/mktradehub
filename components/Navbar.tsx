import React, { useState, useEffect } from 'react';
import { Menu, X, Container, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Logic: If on home page, transparent until scroll.
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(id as PageType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', name: t.nav.home },
    { id: 'about', name: t.nav.about },
    { id: 'services', name: t.nav.services },
    { id: 'stats', name: t.nav.stats },
    { id: 'contact', name: t.nav.contact },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-50/95 shadow-lg py-2 backdrop-blur-md' : 'bg-primary/90 md:bg-transparent py-4'}`} dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Container className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className={`font-bold text-2xl ${isScrolled ? 'text-primary' : 'text-white'}`}>
              MK <span className={isScrolled ? 'text-secondary' : 'text-white'}>TradeHub</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 space-x-reverse rtl:space-x-reverse ltr:space-x-normal gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`font-semibold transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                } ${currentPage === link.id && isScrolled ? 'text-primary' : ''} ${currentPage === link.id && !isScrolled ? 'text-white underline underline-offset-8' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 font-semibold ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-white/80'}`}
            >
              <Globe className="h-5 w-5" />
              <span>{language === 'ar' ? 'English' : 'عربي'}</span>
            </button>

            {/* CTA Button Desktop */}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className={`px-5 py-2 rounded-full font-bold transition-all ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white text-primary hover:bg-slate-100'
              }`}
            >
              {t.nav.requestQuote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-primary font-bold`}
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-primary focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-50 shadow-xl absolute w-full top-full right-0 border-t border-slate-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-100 rounded-md"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="block w-full text-center mt-4 px-5 py-3 rounded-md font-bold bg-primary text-white hover:bg-primary-dark"
            >
              {t.nav.requestQuote}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;