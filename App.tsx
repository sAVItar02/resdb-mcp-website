import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Showcase } from './components/Showcase';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { Collaborators } from './components/Collaborators';

import { McpMonitor } from './components/McpMonitor';
import { Motivation } from './components/Motivation';
import { Architecture } from './components/Architecture';
import { SnakeGame } from './components/SnakeGame';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header scrolled={scrolled} onOpenGame={() => setShowGame(true)} />
      {showGame && <SnakeGame onClose={() => setShowGame(false)} />}
      <main className="grow scroll-smooth">
        <Hero />
        <Motivation />
        <Architecture />
        <About />
        <Stats />
        <Showcase />
        <McpMonitor />
        <Features />
        <Gallery />
        <Collaborators />
      </main>
      <Footer />
    </div>
  );
};

export default App;