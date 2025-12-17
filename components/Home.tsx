import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Stats from './Stats';
import Contact from './Contact';

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