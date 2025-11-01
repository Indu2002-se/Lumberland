import './PageStyles.css';

const Services = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Our Services</h1>
        <p>Comprehensive timber solutions for all your construction needs.</p>
        
        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Cutting</h3>
            <p>Precision cutting services to your exact specifications and requirements.</p>
          </div>
          
          <div className="service-card">
            <h3>Timber Treatment</h3>
            <p>Professional treatment services to enhance durability and longevity.</p>
          </div>
          
          <div className="service-card">
            <h3>Delivery Services</h3>
            <p>Reliable delivery across Malaysia with flexible scheduling options.</p>
          </div>
          
          <div className="service-card">
            <h3>Consultation</h3>
            <p>Expert advice on timber selection and project planning.</p>
          </div>
          
          <div className="service-card">
            <h3>Quality Assurance</h3>
            <p>Rigorous quality control to ensure every piece meets our standards.</p>
          </div>
          
          <div className="service-card">
            <h3>Bulk Orders</h3>
            <p>Special pricing and handling for large commercial projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;