import './About.css';
import aboutImage from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>ABOUT US</h2>
        </div>
        
        <div className="about-container">
          <div className="about-image">
            <img src={aboutImage} alt="About LumberLand" />
          </div>
          
          <div className="about-content">
            <div className="about-section">
              <h3>Our Story</h3>
              <p>
                Founded with a vision to provide premium quality timber solutions, LumberLand has grown from a small local business to a trusted name in the Malaysian timber industry.
              </p>
              <p>
                Our commitment to excellence, combined with deep industry knowledge and modern facilities, has enabled us to serve over 500 satisfied customers and complete more than 1000 successful projects.
              </p>
              <p>
                We specialize in authentic Malaysian timber sourcing, custom cutting services, and comprehensive project support, ensuring that every client receives exactly what they need for their projects.
              </p>
            </div>
            
            <div className="mission-vision">
              <div className="mission">
                <h4>Our Mission</h4>
                <p>
                  To provide exceptional timber products and services that exceed customer expectations while maintaining the highest standards of quality, sustainability, and professional integrity.
                </p>
              </div>
              
              <div className="vision">
                <h4>Our Vision</h4>
                <p>
                  To be the leading timber specialist in the region, recognized for innovation, quality, and customer satisfaction while contributing to sustainable forestry practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;