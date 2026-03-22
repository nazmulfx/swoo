import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar />

      <div className="container breadcrumb-container">
        <div className="breadcrumb-white-card">
          <span>Home / pages / <strong>about</strong></span>
        </div>
      </div>

      <main className="about-main-container container">
        <section className="top-unified-block">
          <div className="hero-banner-part">
            <div className="hero-text">
              <h1>Best experience<br/>always wins</h1>
              <p className="hero-sub">#1 Online Marketplace for Electronic & Technology<br/>in Mahanttan, CA</p>
            </div>
            <div className="hero-graphic">
              <img src="https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=800" alt="Stacked Boxes" className="hero-boxes-img" />
            </div>
          </div>
          
          <div className="business-stats-row">
            <div className="stats-mission-statement">
              <h3>OUR PURPOSE IS TO <span className="swoo-green">ENRICH<br/>AND ENHANCE LIVES</span> THROUGH<br/>TECHNOLOGY</h3>
            </div>
            <div className="stat-pill">
              <span className="stat-val">$12,5M</span>
              <span className="stat-lab">TOTAL REVENUE FROM<br/>2001 - 2023</span>
            </div>
            <div className="stat-pill">
              <span className="stat-val">12K+</span>
              <span className="stat-lab">ORDERS DELIVERED<br/>SUCCESSFUL ON EVERYDAY</span>
            </div>
            <div className="stat-pill">
              <span className="stat-val">725+</span>
              <span className="stat-lab">STORE AND OFFICE IN U.S<br/>AND WORLDWIDE</span>
            </div>
          </div>
        </section>

        <section className="middle-layout-grid">
          <div className="delivery-mascot-card">
            <div className="bg-typography-effect">SWAT<br/>TECH</div>
            <img src="https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80&w=800" alt="Delivery Guy" className="mascot-img-cutout" />
            
            <div className="physical-box-badge">
              <div className="inner-badge-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="inner-badge-text">
                <span className="badge-brand">SWAT</span>
                <span className="badge-mart">TECH MART</span>
              </div>
            </div>
          </div>

          <div className="vision-mission-statement-card">
            <h2 className="vision-header">We connect millions of buyers and sellers around the world, empowering people & creating economic opportunity for all.</h2>
            <p className="vision-paragraph">Within our markets, millions of people around the world connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage & scale their businesses.</p>
            <button className="btn-swoo-premium">OUR SHOWREEL</button>
          </div>
        </section>

        <section className="features-pillars-grid">
          <div className="feature-pillar-card">
            <div className="pillar-header">
              <h3 className="pillar-title">100% AUTHENTIC<br/>PRODUCTS</h3>
              <div className="pillar-green-dot"></div>
            </div>
            <p className="pillar-description">Swoo Tech Mart just distribute 100% authorized products & guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum sapien varius.</p>
          </div>

          <div className="feature-pillar-card">
            <div className="pillar-header">
              <h3 className="pillar-title">FAST<br/>DELIVERY</h3>
              <div className="pillar-green-dot"></div>
            </div>
            <p className="pillar-description">Fast shipping with a lots of option to delivery. 100% guarantee that your goods alway on time and perserve quality.</p>
          </div>

          <div className="feature-pillar-card">
            <div className="pillar-header">
              <h3 className="pillar-title">AFFORDABLE<br/>PRICE</h3>
              <div className="pillar-green-dot"></div>
            </div>
            <p className="pillar-description">We offer an affordable & competitive price with a lots of special promotions.</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
