import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import News from './components/News';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

function App() {
  return (
    <main className="relative overflow-hidden">
      <ul className="fireflies">
        {Array.from({ length: 20 }).map((_, i) => (
          <li key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
        ))}
      </ul>
      <Hero />
      <About />
      <News />
      <SocialLinks />
      <Footer />
    </main>
  );
}

export default App;
