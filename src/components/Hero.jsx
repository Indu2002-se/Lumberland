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
    <>
      <section className="hero" id="home">
        <div className="hero-background">
          {backgroundImages.map((bg, index) => (
            <div
              key={index}
              className={`hero-bg-image ${index === currentBg ? 'active' : ''}`}
            >
              <img src={bg} alt={`Hero background ${index + 1}`} />
            </div>
          ))}
          <div className="hero-overlay" />
        </div>
      </section>

      {/* Viber Contact Widget */}
      <div className="viber-widget">
        <div className="viber-icon">
          <i className="fab fa-viber"></i>
        </div>
        <div className="viber-info">
          <span className="viber-label">Call us on Viber</span>
          <span className="viber-number">+960 7420036</span>
        </div>
      </div>
    </>
  );
};

export default Hero;