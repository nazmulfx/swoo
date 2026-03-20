import React, { useState } from 'react';
import './RecentlyViewed.css';

const RecentlyViewed = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentlyViewedProducts = [
    {
      id: 1,
      name: 'Xomie Remid 8 Sport Water Resitance Watch',
      image: 'https://img.icons8.com/color/400/smart-watch.png',
      reviews: 152,
      priceCurrent: '$579.00',
      priceOld: null,
      badge: { text: 'NEW', type: 'dark' }
    },
    {
      id: 2,
      name: 'Microte Surface 2.0 Laptop',
      image: 'https://img.icons8.com/color/400/laptop.png',
      reviews: null,
      priceCurrent: '$979.00',
      priceOld: null,
      badge: { text: 'NEW', type: 'dark' }
    },
    {
      id: 3,
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      image: 'https://img.icons8.com/color/400/ipad.png',
      reviews: null,
      priceCurrent: '$979.00 - $1,259.00',
      priceOld: null,
      badge: null
    },
    {
      id: 4,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      image: 'https://img.icons8.com/color/400/smartphone.png',
      reviews: 152,
      priceCurrent: '$579.00',
      priceOld: '$779.00',
      priceColor: 'red',
      badge: { text: 'SAVE\n$192.00', type: 'green' }
    },
    {
      id: 5,
      name: 'BOSO Wireless Headphones',
      image: 'https://img.icons8.com/color/400/headphones.png',
      reviews: 89,
      priceCurrent: '$299.00',
      priceOld: null,
      badge: null
    }
  ];

  const itemsPerView = 4;
  const maxSlide = Math.max(0, recentlyViewedProducts.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="recently-viewed-area container">
      <div className="rv-card">
        {/* Header */}
        <div className="rv-header">
          <div className="rv-header-left">
            <h3>YOUR RECENTLY VIEWED</h3>
            <a href="#" className="rv-view-all">View All</a>
          </div>
          
          <div className="rv-nav-pill">
            <button className="rv-nav-btn" onClick={prevSlide} aria-label="Previous">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <div className="rv-nav-divider"></div>
            <button className="rv-nav-btn" onClick={nextSlide} aria-label="Next">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="rv-slider-container">
          <div 
            className="rv-slider-track"
            style={{ transform: `translateX(calc(-${currentSlide} * (25%)))` }}
          >
            {recentlyViewedProducts.map(product => (
              <div key={product.id} className="rv-product-card">
                
                {/* Horizontal Layout: Left Image, Right Info */}
                <div className="rv-image-col">
                  {product.badge && (
                    <div className={`rv-badge rv-badge-${product.badge.type}`}>
                      {product.badge.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i === 0 && product.badge.text.includes('\n') && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                  <img src={product.image} alt={product.name} className="rv-image" />
                </div>
                
                <div className="rv-info-col">
                  <div className="rv-info-top">
                    <span className="rv-reviews">
                      {product.reviews ? `(${product.reviews})` : '\u00A0'}
                    </span>
                    <div className="rv-action-circle"></div>
                  </div>
                  
                  <h4 className="rv-title">{product.name}</h4>
                  
                  <div className="rv-pricing">
                    <span className={`rv-price-current ${product.priceColor === 'red' ? 'red' : ''}`}>
                      {product.priceCurrent}
                    </span>
                    {product.priceOld && (
                      <span className="rv-price-old">{product.priceOld}</span>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
