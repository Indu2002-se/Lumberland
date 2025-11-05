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

          
        </div>
      </div>
    </section>
  );
};

export default About;