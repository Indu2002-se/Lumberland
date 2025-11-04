import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
        {/* Left Side - Contact Form */}
        <div className="contact-form-container">
          <div className="contact-form-header">
            <p className="contact-subtitle">Contact Us</p>
            <h2 className="contact-title">Get In Touch</h2>
          </div>

          <form className="modern-contact-form">
            <div className="form-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name..."
                className="form-input"
                required
              />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="example@youremail.com"
                className="form-input"
                required
              />
            </div>

            <div className="form-field">
              <label>Your Mobile No</label>
              <input
                type="text"
                placeholder="Title..."
                className="form-input"
                required
              />
            </div>

            <div className="form-field">
              <label>Message</label>
              <textarea
                placeholder="Type Here..."
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-button">
              Send Now
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info & Map */}
        <div className="contact-info-container">
          <div className="contact-description">
            <p>Premium quality timber, expert craftsmanship, and exceptional service. Your trusted partner for all timber and construction material needs in Maldives.</p>
          </div>

          <div className="contact-details-grid">
            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fab fa-viber"></i>
              </div>
              <div className="contact-text">
                <h4>Viber</h4>
                <p>+960 7420036</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4>Email Address</h4>
                <p>Sales@lumberland.mv</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-text">
                <h4>Our Office</h4>
                <p>Lumberland, Male, Maldives</p>
              </div>
            </div>
          </div>

          {/* Integrated Map */}
          <div className="contact-map">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Lumberland%20Male%20Maldives+(Lumberland%20Timber%20Specialists)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumberland Timber Specialists - Male, Maldives"
            ></iframe>
            <div className="map-link">
              <a 
                href="https://maps.app.goo.gl/r3HcYKvLmLYMmDKV7?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="directions-btn"
              >
                <i className="fas fa-directions"></i>
                Get Directions to Lumberland
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;