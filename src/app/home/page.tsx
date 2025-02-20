// pages/index.tsx
import { Navbar, Hero, About, Services, Skills, Contact, Footer } from '../components';
import React from 'react';
const Home = () => {
  return (
    <main>
        <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;