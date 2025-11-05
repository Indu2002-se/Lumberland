import './About.css';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>ABOUT US</h2>
        </div>

        <div className="about-main">
          <div className="about-hero">
            <div className="about-text">
              <h3>Building Excellence Since Day One</h3>
              <p className="about-intro">
                LumberLand has grown from a small local business to a trusted name in the Malaysian timber industry, 
                serving the Maldives with premium quality building materials and exceptional service.
              </p>
            </div>
            <div className="about-image-wrapper">
              <img src={aboutImage} alt="About LumberLand" />
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-award"></i>
              </div>
              <h4>Premium Quality</h4>
              <p>We source only the finest Malaysian timber and building materials, ensuring every product meets our high standards.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h4>Expert Craftsmanship</h4>
              <p>Our skilled team provides custom cutting services and professional guidance for all your construction needs.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h4>Reliable Service</h4>
              <p>Fast delivery, competitive pricing, and comprehensive project support from start to finish.</p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;