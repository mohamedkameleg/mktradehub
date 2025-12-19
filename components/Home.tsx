import React from 'react';
import Hero from './Hero.tsx';
import Services from './Services.tsx';
import Stats from './Stats.tsx';
import Contact from './Contact.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Contact />
    </>
  );
};

export default Home;