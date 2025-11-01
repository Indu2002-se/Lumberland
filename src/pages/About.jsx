import './PageStyles.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>About Lumber Land</h1>
        <p>Your trusted Malaysian timber specialists with decades of experience.</p>
        
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in Malaysia, Lumber Land has been serving the construction and woodworking 
            industry for over two decades. We pride ourselves on providing premium quality timber 
            and exceptional customer service.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To be the leading supplier of sustainable, high-quality timber products while 
            maintaining our commitment to environmental responsibility and customer satisfaction.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>Premium quality timber sourced responsibly</li>
            <li>Expert craftsmanship and processing</li>
            <li>Competitive pricing and flexible terms</li>
            <li>Reliable delivery and logistics</li>
            <li>Comprehensive customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;