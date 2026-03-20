import React, { useState } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('BEST SELLER');
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = ['BEST SELLER', 'NEW IN', 'POPULAR'];

  const products = [
    {
      id: 1,
      name: 'BOSO 2 Wireless On Ear Headphone',
      image: 'https://img.icons8.com/color/400/headphones.png',
      reviews: 152,
      priceCurrent: '$359.00',
      priceOld: null,
      saveText: null,
      badges: [{ text: 'FREE SHIPPING', type: 'green' }, { text: 'FREE GIFT', type: 'red' }],
      stockStatus: 'In stock',
      stockType: 'success',
      variations: [
        'https://img.icons8.com/color/48/headphones.png',
        'https://img.icons8.com/material-two-tone/48/headphones.png'
      ]
    },
    {
      id: 2,
      name: 'OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS',
      image: 'https://img.icons8.com/color/400/ipad.png',
      reviews: 152,
      priceCurrent: '$569.00',
      priceColor: 'red',
      priceOld: '$759.00',
      saveText: 'SAVE\n$199.00',
      badges: [{ text: 'FREE SHIPPING', type: 'green' }],
      stockStatus: 'In stock',
      stockType: 'success'
    },
    {
      id: 3,
      name: 'uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB',
      image: 'https://img.icons8.com/color/400/desktop-pc.png',
      reviews: 8,
      priceCurrent: '$1,729.00',
      priceColor: 'red',
      priceOld: '$2,119.00',
      saveText: 'SAVE\n$59.00',
      badges: [{ text: 'FREE SHIPPING', type: 'green' }],
      stockStatus: 'Out of stock',
      stockType: 'danger'
    },
    {
      id: 4,
      name: 'Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop',
      image: 'https://img.icons8.com/color/400/apple-watch.png',
      reviews: null,
      priceCurrent: '$979.00 - $1,259.00',
      priceOld: null,
      saveText: null,
      badges: [{ text: '$2.98 SHIPPING', type: 'gray' }],
      stockStatus: 'PRE - ORDER',
      stockType: 'neutral'
    },
    {
      id: 5,
      name: 'iSmart 24V Charger',
      image: 'https://img.icons8.com/color/400/usb-plug.png',
      reviews: 9,
      priceCurrent: '$9.00',
      priceColor: 'red',
      priceOld: '$12.00',
      saveText: 'SAVE\n$3.00',
      badges: [{ text: '$3.98 SHIPPING', type: 'gray' }],
      stockStatus: 'Contact',
      stockType: 'neutral'
    },
    {
      id: 6,
      name: 'Extra Product for Slider Demo',
      image: 'https://img.icons8.com/color/400/slr-camera.png',
      reviews: 42,
      priceCurrent: '$499.00',
      priceOld: null,
      saveText: null,
      badges: [{ text: 'FREE SHIPPING', type: 'green' }],
      stockStatus: 'In stock',
      stockType: 'success'
    }
  ];

  const itemsPerView = 5;
  const maxSlide = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="product-showcase-area container">
      <div className="showcase-card">
        {/* Header Tabs */}
        <div className="showcase-header">
          <div className="showcase-tabs">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <a href="#" className="showcase-view-all">View All</a>
        </div>

        {/* Slider Container */}
        <div className="showcase-slider-wrapper">
          <button className="slider-nav-btn prev" onClick={prevSlide} aria-label="Previous">
            &#10094;
          </button>
          
          <div className="showcase-slider-container">
            <div 
              className="showcase-slider-track"
              style={{ transform: `translateX(calc(-${currentSlide} * (20%)))` }}
            >
              {products.map(product => (
                <div key={product.id} className="product-card">
                  {/* Image area */}
                  <div className="product-image-container">
                    <div className="product-actions-top">
                      {product.saveText && (
                        <div className="badge-save">
                          {product.saveText.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i === 0 && <br />}
                            </React.Fragment>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Modern hover actions overlay */}
                    <div className="product-actions-overlay">
                      <button className="overlay-action-btn" aria-label="Add to Wishlist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      </button>
                      <button className="overlay-action-btn" aria-label="Quick View">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      </button>
                      <button className="overlay-action-btn" aria-label="Add to Cart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                      </button>
                    </div>

                    <img src={product.image} alt={product.name} className="product-image" />
                  </div>

                  {/* Info area */}
                  <div className="product-info">
                    <div className="product-reviews">
                      {product.reviews ? `(${product.reviews})` : '\u00A0'}
                    </div>
                    
                    <h4 className="product-title">{product.name}</h4>
                    
                    <div className="product-prices">
                      <span className={`price-current ${product.priceColor || ''}`}>
                        {product.priceCurrent}
                      </span>
                      {product.priceOld && (
                        <span className="price-old">{product.priceOld}</span>
                      )}
                    </div>

                    <div className="product-badges">
                      {product.badges.map((badge, idx) => (
                        <span key={idx} className={`badge badge-${badge.type}`}>
                          {badge.text}
                        </span>
                      ))}
                    </div>

                    <div className={`product-stock stock-${product.stockType}`}>
                      {product.stockType === 'success' && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--primary, #00bf37)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      )}
                      {product.stockType === 'danger' && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="#e53935"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
                      )}
                      <span>{product.stockStatus}</span>
                    </div>

                    {product.variations && (
                      <div className="product-variations">
                        {product.variations.map((varImg, idx) => (
                          <div key={idx} className={`variation-item ${idx === 0 ? 'active' : ''}`}>
                            <img src={varImg} alt="variation" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-nav-btn next" onClick={nextSlide} aria-label="Next">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
