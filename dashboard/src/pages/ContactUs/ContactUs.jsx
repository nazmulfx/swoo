import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import contactWorkerImage from '../../assets/contact_worker_laptop.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States (US)',
    subject: '',
    message: '',
    subscribe: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'contact' }
  ];

  return (
    <div className="contact-us-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      <main className="contact-container container">
        
        {/* Contact Info Overview Card */}
        <div className="contact-premium-card">
          <div className="contact-header-area">
             <div className="contact-header-text">
                <h1>Ready to work with us?</h1>
                <p>CONTACT US FOR ALL YOUR QUESTIONS AND OPINIONS</p>
             </div>
          </div>

          <div className="contact-main-grid">
            {/* Left Side: Contact Form */}
            <section className="contact-form-section">
              {isSubmitted ? (
                <div className="success-message" style={{ 
                  padding: '40px', 
                  backgroundColor: '#f0fff4', 
                  borderRadius: '12px', 
                  border: '1px solid #c6f6d5',
                  textAlign: 'center',
                  animation: 'fadeIn 0.5s ease-out'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                  <h3 style={{ color: '#2f855a', marginBottom: '10px' }}>Message Sent Successfully!</h3>
                  <p style={{ color: '#48bb78' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name <span className="required">*</span></label>
                      <div className="input-wrapper">
                        <input 
                          type="text" 
                          id="firstName"
                          name="firstName" 
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <div className="input-wrapper">
                        <input 
                          type="text" 
                          id="lastName"
                          name="lastName" 
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="email">Email Address <span className="required">*</span></label>
                      <div className="input-wrapper">
                        <input 
                          type="email" 
                          id="email"
                          name="email" 
                          placeholder="Example@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                      <div className="input-wrapper">
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone" 
                          placeholder="+1 (000) 000-0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="country">Country / Region <span className="required">*</span></label>
                      <div className="input-wrapper select-wrapper">
                        <select 
                          id="country"
                          name="country" 
                          value={formData.country}
                          onChange={handleChange}
                          required
                        >
                          <option value="United States (US)">United States (US)</option>
                          <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="subject">Subject <span className="required">*</span></label>
                      <div className="input-wrapper">
                        <input 
                          type="text" 
                          id="subject"
                          name="subject" 
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="message">Message <span className="required">*</span></label>
                      <div className="input-wrapper">
                        <textarea 
                          id="message"
                          name="message" 
                          placeholder="Note about your order, e.g. special note for delivery"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="checkbox-group">
                    <input 
                      type="checkbox" 
                      id="subscribe" 
                      name="subscribe"
                      checked={formData.subscribe}
                      onChange={handleChange}
                    />
                    <label htmlFor="subscribe" className="checkbox-label">
                      I want to receive news and updates once in a while. By submitting, I'm agreed to the <Link to="/terms">Terms & Conditions</Link>
                    </label>
                  </div>

                  <button type="submit" className="theme-btn">SEND MESSAGE</button>
                </form>
              )}
            </section>

            {/* Right Side: Sidebar */}
            <aside className="contact-sidebar">
              <div className="contact-info-card">
                <div className="info-item">
                  <h4 className="info-label">UNITED STATES (HEAD QUATER)</h4>
                  <div className="info-content">
                    152 Thatcher Road St, Mahattan, 10463, US<br />
                    (+025) 3886 25 16<br />
                    <a href="mailto:hello@swattechmart.com" className="info-link">hello@swattechmart.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <h4 className="info-label">UNITED KINGDOM (BRANCH)</h4>
                  <div className="info-content">
                    12 Buckingham Rd, Thornthwaite, HG3 4TY, UK<br />
                    (+718) 895-5350<br />
                    <a href="mailto:contact@swattechmart.co.uk" className="info-link">contact@swattechmart.co.uk</a>
                  </div>
                </div>

                <div className="sidebar-socials">
                  <a href="#" className="social-icon" aria-label="Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Pinterest">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              <div className="sidebar-image">
                <img src={contactWorkerImage} alt="Person working on laptop" />
              </div>
            </aside>
          </div>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="map-title lg-theme-title">FIND US ON GOOGLE MAP</h2>
          <div className="map-wrapper map-premium">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.0538!2d10.5052!3d43.8436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d57f893698064d%3A0x6338303030303030!2sChiesa%20di%20San%20Francesco!5e0!3m2!1sen!2sbd!4v1711041600000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
