import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'terms & conditions' }
  ];

  return (
    <div className="terms-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      <main className="terms-section">
        <div className="container">
          <div className="terms-card">
            {/* Content Side */}
            <div className="terms-content-area">
              <div className="terms-header">
                <h1>Terms & Conditions</h1>
                <p>LAST UPDATED: MARCH 20, 2026</p>
              </div>
              
              <div className="terms-scroll-box">
                <div className="terms-text-content">
                  <section className="terms-block">
                    <h2>1. Introduction</h2>
                    <p>Welcome to Swoo. By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, please do not use our services.</p>
                  </section>

                  <section className="terms-block">
                    <h2>2. Use of Services</h2>
                    <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of the services does not violate any applicable local, national, or international law or regulation.</p>
                    <ul>
                      <li>You must be at least 18 years old to make a purchase.</li>
                      <li>You agree not to attempt to interfere with the proper working of the site.</li>
                      <li>You may not use our products for any illegal or unauthorized purpose.</li>
                    </ul>
                  </section>

                  <section className="terms-block">
                    <h2>3. Product Information & Pricing</h2>
                    <p>We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the site. However, we do not guarantee that the product descriptions are entirely accurate, complete, reliable, current, or error-free.</p>
                    <p>Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service without notice at any time.</p>
                  </section>

                  <section className="terms-block">
                    <h2>4. Payment & Billing</h2>
                    <p>By providing a credit card or other payment method, you represent and warrant that you are authorized to use the designated payment method and that you authorize us (or our third-party payment processor) to charge your payment method for the total amount of your purchase.</p>
                  </section>

                  <section className="terms-block">
                    <h2>5. Shipping & Returns</h2>
                    <p>Please review our separate Shipping & Returns Policy, which governs all purchases made through the site. By making a purchase, you agree to the terms explicitly detailed in that policy regarding delivery times, fees, and return eligibility.</p>
                  </section>

                  <section className="terms-block">
                    <h2>6. Limitation of Liability</h2>
                    <p>In no case shall Swoo, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.</p>
                  </section>

                  <section className="terms-block">
                    <h2>7. Changes to Terms</h2>
                    <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms and Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
