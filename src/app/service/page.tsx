// pages/index.tsx
import { Navbar, Services, Skills,Footer } from '../components';
import React from 'react';
const Home = () => {
  return (
    <main>
        <Navbar />
      <Services />
      <Skills />
      <Footer />
    </main>
  );
};

export default Home;