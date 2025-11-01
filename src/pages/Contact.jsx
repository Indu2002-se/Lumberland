import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Contact Us</h1>
        <p>Get in touch with our timber specialists for quotes and inquiries.</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            
            <div className="contact-item">
              <h3><i className="fas fa-map-marker-alt"></i> Address</h3>
              <p>123 Timber Street<br />Kuala Lumpur, Malaysia<br />50000</p>
            </div>
            
            <div className="contact-item">
              <h3><i className="fas fa-phone"></i> Phone</h3>
              <p>+60 3-1234 5678</p>
            </div>
            
            <div className="contact-item">
              <h3><i className="fas fa-envelope"></i> Email</h3>
              <p>info@lumberland.my</p>
            </div>
            
            <div className="contact-item">
              <h3><i className="fas fa-clock"></i> Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 8:00 AM - 2:00 PM<br />Sunday: Closed</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              
              <div className="form-group">
                <select required>
                  <option value="">Select Service</option>
                  <option value="quote">Request Quote</option>
                  <option value="consultation">Consultation</option>
                  <option value="delivery">Delivery Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;