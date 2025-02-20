// pages/index.tsx
import { Navbar, Contact,Footer } from '../components';
import React from 'react';
const Home = () => {
  return (
    <main>
        <Navbar />
        <Contact />
      <Footer />
    </main>
  );
};

export default Home;