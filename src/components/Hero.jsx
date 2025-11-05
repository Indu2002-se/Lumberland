import { useState, useEffect } from 'react';
import './Hero.css';

// Import hero images
import hero1 from '../assets/IMAGES/hero1.png';
import hero2 from '../assets/IMAGES/hero2.png';
import hero3 from '../assets/IMAGES/hero3.png';
import hero4 from '../assets/IMAGES/hero4.png';
import hero5 from '../assets/IMAGES/hero5.png';
import hero6 from '../assets/IMAGES/hero6.png';
import hero7 from '../assets/IMAGES/hero7.png';

const Hero = () => {
  const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-image-container">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Hero ${index + 1}`}
              className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>

        
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
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