import './Map.css';

const Map = () => {
  return (
    <section className="map-section" id="map">
      <div className="container">
        <div className="section-header">
          <h2>FIND US</h2>
          <p>Visit our location for all your timber needs</p>
        </div>
        
        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d73.5093!3d4.1755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTAnMzEuOCJOIDczwrAzMCczMy41IkU!5e0!3m2!1sen!2smv!4v1635000000000!5m2!1sen!2smv"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LumberLand Location"
            ></iframe>
          </div>
          
          <div className="map-info">
            <div className="location-card">
              <div className="location-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="location-details">
                <h3>Our Location</h3>
                <p>Visit us at our timber yard for quality products and expert advice</p>
                <div className="address">
                  <p><strong>LumberLand Timber Specialists</strong></p>
                  <p>Maldives</p>
                </div>
                <div className="map-actions">
                  <a 
                    href="https://maps.app.goo.gl/r3HcYKvLmLYMmDKV7?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="directions-btn"
                  >
                    <i className="fas fa-directions"></i>
                    Get Directions
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/r3HcYKvLmLYMmDKV7?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-larger-btn"
                  >
                    <i className="fas fa-expand"></i>
                    View Larger Map
                  </a>
                </div>
              </div>
            </div>
            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;