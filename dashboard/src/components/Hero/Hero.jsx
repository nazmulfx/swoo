import React from 'react';
import './Hero.css';

// Importing generated images
import headphonesImg from '../../assets/hero_headphones_1773601806382.png';
import watchImg from '../../assets/hero_watch_1773601823219.png';
import ps5Img from '../../assets/hero_ps5_speaker_1773601910392.png';
import keyboardImg from '../../assets/hero_keyboard_1773601926058.png';
import goproImg from '../../assets/hero_gopro_1773602018809.png';

const Hero = () => {
  const categories = [
    'Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 
    'Gaming & VR', 'Networking', 'Cameras', 'Sounds', 
    'Office', 'Storage, USB', 'Accessories', 'Clearance'
  ];

  return (
    <section className="hero-section container">
      <div className="hero-layout">
        {/* Sidebar */}
        <div className="hero-sidebar">
          <ul className="sidebar-list">
            {categories.map((cat, index) => (
              <li key={index}>
                <a href={`#${cat.toLowerCase().replace(/ /g, '-')}`}>{cat}</a>
                {index < categories.length - 1 && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Grid Area */}
        <div className="hero-grid-container">
          <div className="hero-grid">
            {/* Top Row: Main Slide (2/3) + Watch Banner (1/3) */}
            <div className="hero-main-slide">
              <div className="slide-content">
                <span className="slide-label">OVER EAR BISO</span>
                <h2>Noise Cancelling<br/>Headphone</h2>
                <p>Boso Over-Ear Headphone<br/>Wifi, Voice Assistant,<br/>Low Latency Game Mde</p>
                <button className="buy-now-btn">BUY NOW</button>
              </div>
              <div className="slide-image">
                <img src={headphonesImg} alt="Noise Cancelling Headphone" />
              </div>
              <div className="pagination">
                <span>3 / 3</span>
              </div>
            </div>

            <div className="banner-item watch-banner" style={{ backgroundImage: `url(${watchImg})` }}>
              <div className="banner-content">
                <span className="brand-label">XOMIA</span>
                <h3>Sport Water<br/>Resistance<br/>Watch</h3>
                <button className="shop-now-btn">SHOP NOW</button>
              </div>
            </div>

            {/* Bottom Row: PS5 (1/3) + Keyboard (1/3) + GoPro (1/3) */}
            <div className="banner-item ps5-banner" style={{ backgroundImage: `url(${ps5Img})` }}>
              <div className="banner-content">
                <h3>Sono Playgo 5<br/>from <span className="price-green">$569</span></h3>
                <a href="#" className="discover-link">DISCOVER NOW</a>
              </div>
            </div>

            <div className="banner-item keyboard-banner" style={{ backgroundImage: `url(${keyboardImg})` }}>
              <div className="banner-content">
                <h3>Logitek Bluetooth<br/><span className="highlight-yellow">Keyboard</span></h3>
                <p className="subtitle">Best for all device</p>
              </div>
            </div>

            <div className="banner-item gopro-banner" style={{ backgroundImage: `url(${goproImg})` }}>
              <div className="banner-content">
                <h3>OKODO<br/>HERO 11+<br/>BLACK</h3>
                <div className="price-tag">
                  <span className="from-label">FROM</span>
                  <span className="price">$169</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
