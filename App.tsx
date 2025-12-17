import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import StatsPage from './components/StatsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import { LanguageProvider } from './contexts/LanguageContext';
import { PageType } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const handleNavigate = (page: PageType, sectionId?: string) => {
    setCurrentPage(page);
    
    // For manual section navigation if needed later, but now we use pages
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="font-cairo antialiased bg-slate-100 min-h-screen relative">
        <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {currentPage === 'home' && <Home />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'services' && <ServicesPage />}
          {currentPage === 'stats' && <StatsPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </LanguageProvider>
  );
};

export default App;