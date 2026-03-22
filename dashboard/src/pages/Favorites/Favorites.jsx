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
    }
  ]);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'favorites' }
  ];

  const removeFavorite = (id) => {
    setFavItems(favItems.filter(item => item.id !== id));
  };

  return (
    <div className="favorites-page">
      <Navbar />
      
      <Breadcrumb items={breadcrumbItems} />

      <main className="favorites-main container">
        <header className="fav-header">
          <div className="header-left">
            <h1 className="fav-title">My Wishlist</h1>
            <p className="fav-subtitle">You have {favItems.length} items in your wishlist</p>
          </div>
          <div className="header-actions">
            <button className="btn-outline">CLEAR ALL</button>
            <button className="btn-primary-black">ADD ALL TO CART</button>
          </div>
        </header>
        
        <div className="fav-list-container">
          {favItems.length > 0 ? (
            <div className="fav-items-list">
              {favItems.map(item => (
                <div key={item.id} className="fav-item-row">
                  <div className="item-img-col">
                    <div className="item-img-box">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                  
                  <div className="item-info-col">
                    <div className="item-rating-row">
                      <span className="star-icon">★</span>
                      <span className="rating-val">{item.rating}</span>
                      <span className="review-count">({item.reviews} reviews)</span>
                    </div>
                    <h3 className="item-product-name">{item.name}</h3>
                    <div className="item-stock-status">
                      <span className={`status-dot ${item.stockStatus === 'In Stock' ? 'instock' : 'outofstock'}`}></span>
                      {item.stockStatus}
                    </div>
                  </div>

                  <div className="item-price-col">
                    <span className="item-price-val">${item.price.toFixed(2)}</span>
                  </div>
                  
                  <div className="item-actions-col">
                    <button className="add-to-cart-btn" disabled={item.stockStatus === 'Out of Stock'}>
                      {item.stockStatus === 'In Stock' ? 'ADD TO CART' : 'OUT STOCK'}
                    </button>
                    <button 
                      className="trash-remove-btn" 
                      onClick={() => removeFavorite(item.id)}
                      title="Remove"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-wishlist-state">
              <div className="heart-icon">❤</div>
              <h2>Your wishlist is currently empty</h2>
              <p>Looks like you haven't added anything to your wishlist yet.</p>
              <Link to="/" className="btn-swoo-green">START SHOPPING</Link>
            </div>
          )}
        </div>
        
        {favItems.length > 0 && (
          <div className="fav-footer-nav">
            <Link to="/" className="continue-shopping-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              <span>CONTINUE SHOPPING</span>
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;
