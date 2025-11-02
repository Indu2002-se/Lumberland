import { useState, useEffect } from 'react';
import './Hero.css';
import hero from '../assets/hero.jpg';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [hero, hero1, hero2, hero3];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    return () => {
      clearInterval(bgInterval);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`hero-bg-image ${index === currentBg ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
        <div className="hero-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <h1>Lumber Land</h1>
          <h2>Malaysian Timber Specialists</h2>
          <p>Premium quality timber, expert craftsmanship, and exceptional service. Your trusted partner for all timber and construction material needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;