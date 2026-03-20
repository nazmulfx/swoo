import React, { useState } from 'react';
import './FeaturedArea.css';

// Assets
import laptopImg from '../../assets/cat_laptop.png';

const FeaturedArea = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const brands = [
    { name: 'JAMX', logo: 'https://img.icons8.com/color/48/jam-filled.png' },
    { name: 'Digitek', logo: 'https://img.icons8.com/clouds/100/logo.png', color: '#00bf37' },
    { name: 'tek react js', logo: 'https://img.icons8.com/officel/80/react.png' },
    { name: 'Grafbase', logo: 'https://img.icons8.com/color/48/graphql.png' },
    { name: 'MSI', logo: 'https://img.icons8.com/color/48/msi.png' },
    { name: 'ohbear', logo: 'https://img.icons8.com/color/48/bear.png' },
    { name: 'OAK', logo: 'https://img.icons8.com/color/48/oak-tree.png' },
    { name: 'snyk', logo: 'https://img.icons8.com/color/48/snyk.png' },
    { name: 'sonex', logo: 'https://img.icons8.com/color/48/sonic-the-hedgehog.png' },
    { name: 'stropi', logo: 'https://img.icons8.com/color/48/stripe.png' }
  ];

  const categories = [
    { name: 'Laptops', img: laptopImg },
    { name: 'PC Gaming', img: 'https://img.icons8.com/color/144/desktop-pc.png' },
    { name: 'Headphones', img: 'https://img.icons8.com/color/144/headphones.png' },
    { name: 'Monitors', img: 'https://img.icons8.com/color/144/monitor.png' },
    { name: 'Smartphones', img: 'https://img.icons8.com/color/144/smartphone.png' },
    { name: 'Tablets', img: 'https://img.icons8.com/color/144/ipad.png' },
    { name: 'Cameras', img: 'https://img.icons8.com/color/144/slr-camera.png' },
    { name: 'Accessories', img: 'https://img.icons8.com/color/144/usb.png' }
  ];

  const itemsPerView = 4;
  const maxSlide = Math.max(0, categories.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="featured-area container">
      <div className="featured-grid">
        {/* Featured Brands */}
        <div className="featured-card brands-card">
          <div className="card-header">
            <h3>FEATURED BRANDS</h3>
            <a href="#" className="view-all">View All</a>
          </div>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.logo} alt={brand.name} />
                <span style={brand.color ? { color: brand.color } : {}}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="featured-card categories-card">
          <div className="card-header">
            <h3>TOP CATEGORIES</h3>
            <div className="header-right">
              <a href="#" className="view-all">View All</a>
              <div className="slider-controls">
                <button className="slider-btn" onClick={prevSlide} aria-label="Previous">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button className="slider-btn" onClick={nextSlide} aria-label="Next">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="categories-slider-container">
            <div 
              className="categories-list"
              style={{ transform: `translateX(calc(-${currentSlide} * (25% + 3.75px)))` }}
            >
              {categories.map((cat, index) => (
                <div key={index} className="category-item">
                  <div className="cat-img">
                    <img src={cat.img} alt={cat.name} />
                  </div>
                  <span className="cat-name">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArea;
