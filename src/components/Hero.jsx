import { useState, useEffect } from 'react';
import './Hero.css';
import hero from '../assets/hero.jpg';
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import product1 from '../assets/MERANTI PAR TIMBER.jpeg';
import product2 from '../assets/bintangor  thin plywood.jpeg';
import product3 from '../assets/Blockboard - 18mm Block Board Sheets Hardwood Face Timber Blockboard Sheets.jpeg';
import product4 from '../assets/Anti slip phenolic resin plywood.jpeg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);

  const backgroundImages = [hero, hero1, hero2, hero3];
  
  const products = [
    {
      name: "Meranti PAR Timber",
      image: product1,
      badge: "Best Seller"
    },
    {
      name: "Bintangor Thin Plywood",
      image: product2,
      badge: "Premium"
    },
    {
      name: "Hardwood Blockboard",
      image: product3,
      badge: "Quality"
    },
    {
      name: "Anti Slip Phenolic Plywood",
      image: product4,
      badge: "Popular"
    }
  ];

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);

    const productInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => {
      clearInterval(bgInterval);
      clearInterval(productInterval);
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

        <div className="hero-product-card">
          <div className="sale-badge">{products[currentProduct].badge}</div>
          <div className="product-image">
            <img src={products[currentProduct].image} alt={products[currentProduct].name} />
          </div>
          <div className="product-info">
            <h3>{products[currentProduct].name}</h3>
            <button className="add-to-cart-btn">VIEW PRODUCT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;