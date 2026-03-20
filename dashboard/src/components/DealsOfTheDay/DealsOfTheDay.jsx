import React, { useState, useEffect } from 'react';
import './DealsOfTheDay.css';

const DealsOfTheDay = () => {
  const productImages = [
    "https://img.icons8.com/color/400/smartphone.png",
    "https://img.icons8.com/color/400/android-os.png",
    "https://img.icons8.com/color/400/ipod-touch.png"
  ];

  const [activeImage, setActiveImage] = useState(productImages[0]);
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Generate a persistent future date so it consistently counts down
    // (e.g. 162 days from when this component is loaded, saved to not reset instantly)
    const storedDate = localStorage.getItem('swoo_deal_target_date');
    let target;
    if (storedDate) {
      target = parseInt(storedDate, 10);
    } else {
      target = new Date().getTime() + (162 * 24 * 60 * 60 * 1000) + (9 * 60 * 60 * 1000) + (32 * 60 * 1000) + (34 * 1000);
      localStorage.setItem('swoo_deal_target_date', target.toString());
    }

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="deals-area container">
      <div className="deals-grid">
        {/* Left Deal Card */}
        <div className="deal-main-card">
          <div className="deal-header">
            <h3>DEALS OF THE DAY</h3>
            <div className="deal-header-right">
              {/* Optional broken text fixed or removed */}
            </div>
          </div>
          
          <div className="deal-content">
            <div className="deal-images">
              <div className="deal-thumbnails">
                {productImages.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`thumb ${idx + 1}`} 
                    className={activeImage === img ? 'active' : ''}
                    onMouseEnter={() => setActiveImage(img)}
                    onClick={() => setActiveImage(img)}
                  />
                ))}
              </div>
              <div className="deal-badge-save">
                SAVE<br/>$199.00
              </div>
              <div className="deal-main-image">
                <img src={activeImage} alt="Xioma Redmi Note 11 Pro" />
              </div>
            </div>

            <div className="deal-info">
              <span className="deal-reviews">(12)</span>
              <h2 className="deal-title">Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone</h2>
              
              <div className="deal-pricing">
                <span className="deal-price-current">$569.00</span>
                <span className="deal-price-old">$759.00</span>
              </div>
              
              <ul className="deal-features">
                <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
              </ul>
              
              <div className="deal-labels">
                <span className="label-shipping">FREE SHIPPING</span>
                <span className="label-gift">FREE GIFT</span>
              </div>
              
              <div className="deal-timer-section">
                <div className="timer-text">
                  HURRY UP!<br />
                  PROMOTION WILL<br />
                  EXPIRES IN
                </div>
                <div className="timer-blocks">
                  <div className="timer-block">
                    <span className="timer-num">{timeLeft.days}</span>
                    <span className="timer-unit">d</span>
                  </div>
                  <div className="timer-block">
                    <span className="timer-num">{timeLeft.hours}</span>
                    <span className="timer-unit">h</span>
                  </div>
                  <div className="timer-block">
                    <span className="timer-num">{timeLeft.minutes}</span>
                    <span className="timer-unit">m</span>
                  </div>
                  <div className="timer-block">
                    <span className="timer-num">{timeLeft.seconds}</span>
                    <span className="timer-unit">s</span>
                  </div>
                </div>
              </div>
              
              <div className="deal-progress">
                <div className="progress-text">Sold: <strong>26/75</strong></div>
                <div className="progress-bar-container">
                  <div className="progress-bar-fill" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Banners */}
        <div className="deals-side-banners">
          <div className="side-banner banner-xbox">
            <div className="banner-content">
              <h3>SALE</h3>
              <div className="discount-badge">50%</div>
            </div>
          </div>
          <div className="side-banner banner-tablet">
            {/* Tablet Banner Image Background */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsOfTheDay;
