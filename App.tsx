import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Showcase } from './components/Showcase';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Stats />
        <Showcase />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;