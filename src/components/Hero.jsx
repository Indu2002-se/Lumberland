import { useState, useEffect } from 'react';
import './Hero.css';
import hero1 from '../assets/IMAGES/hero1.png';
import hero2 from '../assets/IMAGES/hero2.png';
import hero3 from '../assets/IMAGES/hero3.png';
import hero4 from '../assets/IMAGES/hero4.png';
import hero5 from '../assets/IMAGES/hero5.png';
import hero6 from '../assets/IMAGES/hero6.png';
import hero7 from '../assets/IMAGES/hero7.png';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];

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
          <p>Premium quality timber, expert craftsmanship, and exceptional service. Your trusted partner for all timber and construction material needs in the Maldives.</p>

          <div className="hero-buttons">
            <a href="#products" className="btn-primary">
              Explore Products →
            </a>

          </div>


        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
    </section>
  );
};

export default Hero;