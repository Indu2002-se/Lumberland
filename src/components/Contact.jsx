import './Contact.css';
import qrImage from '../assets/QR.jpg';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>CONTACT US</h2>
          <p>Get in touch with our timber specialists</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-form-section">
            <h3>Send us a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <textarea placeholder="Your Message" rows="6" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>Sales@lumberland.mv</p>
                  <p>Info@lumberland.mv</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-viber"></i>
                </div>
                <div className="contact-details">
                  <h4>Viber</h4>
                  <p>Connect with us on Viber</p>
                  <div className="qr-code-inline">
                    <img src={qrImage} alt="Viber QR Code" />
                  </div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="contact-details">
                  <h4>Social Media</h4>
                  <div className="social-links">
                    <a href="https://www.facebook.com/share/18ozRnRpCv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://www.instagram.com/lumberlandmv?igsh=MWJkbnBlcmk2aHNiOQ==" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://www.tiktok.com/@lumberlandmv?_t=ZS-90vh8460Q1C&_r=1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-tiktok"></i> TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;