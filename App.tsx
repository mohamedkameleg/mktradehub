import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Stats from './components/Stats.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppBtn from './components/WhatsAppBtn.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';

const App: React.FC = () => {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <LanguageProvider>
      <div className="font-cairo antialiased bg-slate-50 min-h-screen relative overflow-x-hidden">
        <Navbar onNavigate={handleNavigate} />
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="stats">
            <Stats />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
        <WhatsAppBtn />
      </div>
    </LanguageProvider>
  );
};

export default App;