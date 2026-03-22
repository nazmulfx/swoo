import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import './Favorites.css';

const Favorites = () => {
  const [favItems, setFavItems] = useState([
    {
      id: 1,
      name: 'Sony WH-1000XM4 Noise Cancelling Wireless Headphones',
      price: 348.00,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'In Stock',
      rating: 4.8,
      reviews: 1240
    },
    {
      id: 2,
      name: 'Apple Watch Series 7 GPS, 41mm Green Aluminium Case',
      price: 399.00,
      image: 'https://images.unsplash.com/photo-1546868871-70c122467d16?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'In Stock',
      rating: 4.9,
      reviews: 856
    },
    {
      id: 3,
      name: 'Nintendo Switch Console with Neon Blue/Red Joy-Con',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1585858085703-ba59ee2a2db3?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'Out of Stock',
      rating: 4.7,
      reviews: 3210
    },
    {
      id: 4,
      name: 'SROK Smart Phone 128GB, Oled Retina World Edition',
      price: 579.00,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'In Stock',
      rating: 4.5,
      reviews: 642
    },
    {
      id: 5,
      name: 'Apple iPhone 15 Pro, 256GB, Natural Titanium',
      price: 1099.00,
      image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'In Stock',
      rating: 4.9,
      reviews: 2450
    },
    {
      id: 6,
      name: 'Bose QuietComfort 45 Bluetooth Wireless Noise Cancelling Headphones',
      price: 329.00,
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'In Stock',
      rating: 4.8,
      reviews: 1890
    },
    {
      id: 7,
      name: 'Logitech MX Master 3S Wireless Performance Mouse',
      price: 99.00,
      image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=400',
      stockStatus: 'In Stock',
      rating: 4.9,
      reviews: 5620
    }
  ]);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'favorites' }
  ];

  const removeItem = (id) => {
    setFavItems(favItems.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setFavItems([]);
  };

  return (
    <div className="favorites-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      <main className="favorites-main container">
        <header className="fav-header">
          <div className="fav-header-left">
            <h1 className="fav-title">My Wishlist</h1>
            <p className="fav-subtitle">YOU HAVE {favItems.length} ITEMS IN YOUR WISHLIST</p>
          </div>
          <div className="header-actions">
            <button className="btn-outline" onClick={clearAll}>CLEAR ALL</button>
            <button className="btn-primary-black">ADD ALL TO CART</button>
          </div>
        </header>

        {/* Top Section: Table-style list matching Checkout */}
        <section className="fav-fullwidth-items checkout-premium-card">
          <div className="checkout-items-table">
            <div className="checkout-table-header">
              <div className="th-product">PRODUCT NAME</div>
              <div className="th-price">UNIT PRICE</div>
              <div className="th-stock">STOCK STATUS</div>
              <div className="th-action">ACTION</div>
            </div>
            
            <div className="checkout-table-body">
              {favItems.length > 0 ? (
                favItems.map(item => (
                  <div key={item.id} className="checkout-table-row">
                    <div className="td-product">
                      <div className="item-img-box">
                        <img src={item.image} alt={item.name} className="product-thumb" />
                      </div>
                      <div className="product-details">
                        <h3 className="product-name">{item.name}</h3>
                        <div className="item-rating-row">
                          <span className="star-icon">★</span>
                          <span className="rating-val">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="td-price">
                       <span className="item-price-val">${item.price.toFixed(2)}</span>
                    </div>
                    <div className="td-stock">
                      <div className="item-stock-status">
                         <span className={`status-dot ${item.stockStatus.toLowerCase().replace(/\s/g, '')}`}></span>
                         {item.stockStatus}
                      </div>
                    </div>
                    <div className="td-action">
                      <div className="action-buttons-group">
                        <button className="add-to-cart-btn-sm" disabled={item.stockStatus === 'Out of Stock'}>
                          {item.stockStatus === 'Out of Stock' ? 'OUT OF STOCK' : 'ADD TO CART'}
                        </button>
                        <button 
                          className="checkout-remove-btn"
                          onClick={() => removeItem(item.id)}
                          title="Remove from favorites"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-wishlist-state">
                  <div className="heart-icon">♡</div>
                  <h2>Your Wishlist is Empty</h2>
                  <p>Add products to your wishlist to see them here.</p>
                </div>
              )}
            </div>
          </div>
          
          {favItems.length > 0 && (
            <div className="fav-footer-nav" style={{ marginTop: '25px', borderTop: '1px solid #f0f2f5', paddingTop: '20px' }}>
              <Link to="/" className="continue-shopping-btn" style={{ textDecoration: 'none', color: '#111', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                <span>CONTINUE SHOPPING</span>
              </Link>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
