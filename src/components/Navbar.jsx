import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/l.jpg';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instergram.svg';
import tiktokIcon from '../assets/tiktok.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <Link to="/" className="logo-link" onClick={closeMobileMenu}>
              <img src={logo} alt="LumberLand Logo" className="logo-image" />
              <span className="logo-text">LumberLand</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="nav-actions">
            <div className="social-links">
              <a href="https://www.facebook.com/share/18ozRnRpCv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/lumberlandmv?igsh=MWJkbnBlcmk2aHNiOQ==" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.tiktok.com/@lumberlandmv?_t=ZS-90vh8460Q1C&_r=1" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                <img src={tiktokIcon} alt="TikTok" />
              </a>
              <a href="mailto:Sales@lumberland.mv" className="social-link email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Navigation Menu */}
      <div className={`nav-links-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
          <li><a href="#products" onClick={closeMobileMenu}>Products</a></li>
          <li><a href="#services" onClick={closeMobileMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMobileMenu}>About Us</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
        </ul>
        
        <div className="social-links">
          <a href="https://www.facebook.com/share/18ozRnRpCv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link facebook">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/lumberlandmv?igsh=MWJkbnBlcmk2aHNiOQ==" target="_blank" rel="noopener noreferrer" className="social-link instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@lumberlandmv?_t=ZS-90vh8460Q1C&_r=1" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="mailto:Sales@lumberland.mv" className="social-link email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;