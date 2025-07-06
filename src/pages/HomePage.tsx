import React from 'react';
import Navbar from '../components/layout/Navbar';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
