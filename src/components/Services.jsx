import './Services.css';
import serviceImage1 from '../assets/IMAGES/hero7.png'; // Using as placeholder for cutting service
import serviceImage2 from '../assets/service1.jpg'; // Using as placeholder for sourcing

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>OUR SERVICES</h2>

        </div>

        <div className="services-container">
          {/* Custom Cutting Services */}
          <div className="service-item reverse">
            <div className="service-image">
              <img src={serviceImage1} alt="Custom Cutting Services" />
            </div>
            <div className="service-content">
              <h3>Custom Cutting Services</h3>
              <p>Professional cutting with custom dimensions, minimal waste, and quick turnaround.</p>
              <ul className="service-features">
                <li>Precision cutting</li>
                <li>Custom dimensions</li>
                <li>Minimal waste</li>
                <li>Quick delivery</li>
              </ul>
            </div>
          </div>

          {/* Malaysian Sourcing */}
          <div className="service-item">
            <div className="service-content">
              <h3>Malaysian Sourcing</h3>
              <p>Authentic Malaysian timber imports with quality verification and competitive pricing.</p>
              <ul className="service-features">
                <li>Authentic timber</li>
                <li>Quality verified</li>
                <li>Competitive pricing</li>
                <li>Direct import</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={serviceImage2} alt="Malaysian Sourcing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;