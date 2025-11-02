import './Footer.css';
import logo from '../assets/l.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="LumberLand Logo" />
              <h3>LumberLand</h3>
            </div>
            <p>Premium quality timber, expert craftsmanship, and exceptional service. Your trusted partner for all timber and construction material needs.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/18ozRnRpCv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/lumberlandmv?igsh=MWJkbnBlcmk2aHNiOQ==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@lumberlandmv?_t=ZS-90vh8460Q1C&_r=1" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="mailto:Sales@lumberland.mv">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>Custom Cutting Services</li>
              <li>Malaysian Sourcing</li>
              <li>Quality Verification</li>
              <li>Direct Import</li>
              <li>Quick Delivery</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <p>Sales@lumberland.mv</p>
                  <p>Info@lumberland.mv</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <p>Male, Maldives</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 LumberLand. All rights reserved. Malaysian Timber Specialists.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="https://www.flaticon.com/free-icons/viber" title="viber icons" target="_blank" rel="noopener noreferrer">Viber icons created by Rakib Hassan Rahim - Flaticon</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;