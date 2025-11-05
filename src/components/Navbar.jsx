import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/l.jpg';
import facebookIcon from '../assets/facebook.svg';
import instagramIcon from '../assets/instergram.svg';
import tiktokIcon from '../assets/tiktok.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll function with navbar offset
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Fixed navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    closeMobileMenu();
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Show navbar when cursor is near the top (within 100px from top)
      if (e.clientY <= 100) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    // Always show navbar when mobile menu is open
    if (isMobileMenuOpen) {
      setIsNavbarVisible(true);
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-container">
          <div className="logo">
            <a href="#home" className="logo-link" onClick={(e) => handleSmoothScroll(e, 'home')}>
              <img src={logo} alt="LumberLand Logo" className="logo-image" />
              <span className="logo-text">LumberLand</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
              <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Products</a></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a></li>
              <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
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
        {/* Close Button */}
        <button className="mobile-menu-close" onClick={closeMobileMenu}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="mobile-menu-content">
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
            <li><a href="#products" onClick={(e) => handleSmoothScroll(e, 'products')}>Products</a></li>
            <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')}>About Us</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
          </ul>
          
          <div className="mobile-social-section">
            <h4>Follow Us</h4>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;