import React from 'react';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        
        {/* Top Row: Brand & Links */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <h4 className="footer-brand-title">SWOO - 1ST NYC TECH ONLINE MARKET</h4>
            <div className="footer-contact">
              <span className="contact-label">HOTLINE 24/7</span>
              <a href="tel:02536862516" className="contact-phone">(025) 3686 25 16</a>
            </div>
            <p className="footer-address">
              257 Thatcher Road St, Brooklyn, Manhattan,<br/>
              NY 10092<br/>
              contact@swootechmart.com
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" aria-label="Pinterest">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h5>TOP CATEGORIES</h5>
              <ul>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">PC & Computers</a></li>
                <li><a href="#">Cell Phones</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Gaming & VR</a></li>
                <li><a href="#">Networks</a></li>
                <li><a href="#">Cameras</a></li>
                <li><a href="#">Sounds</a></li>
                <li><a href="#">Office</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>COMPANY</h5>
              <ul>
                <li><a href="#">About Swoo</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Store Locations</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>HELP CENTER</h5>
              <ul>
                <li><a href="#">Customer Service</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Track Order</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Product Support</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>PARTNER</h5>
              <ul>
                <li><a href="#">Become Seller</a></li>
                <li><a href="#">Affiliate</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Partnership</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Row: Dropdowns & Subscribe */}
        <div className="footer-mid-row">
          <div className="footer-dropdowns">
            <button className="dropdown-btn">USD <span className="arrow">&#709;</span></button>
            <LanguageSelector />
          </div>

          <div className="footer-subscribe">
            <div className="subscribe-header">
              SUBSCRIBE & GET <span className="highlight-red">10% OFF</span> FOR YOUR FIRST ORDER
            </div>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <p className="subscribe-note">
              By subscribing, you're accepted the our <a href="#">Policy</a>
            </p>
          </div>
        </div>

        {/* Bottom Row: Copyright & Payments */}
        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © 2024 <strong>Shawonetc3</strong>. All Rights Reserved
          </div>
          <div className="footer-payments">
            <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/stripe.png" alt="Stripe" />
            <span className="klarna-logo"><strong>Klarna.</strong></span>
          </div>
          <div className="footer-mobile-link">
            <a href="#">Mobile Site</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
