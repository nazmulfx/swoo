import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      price: 579.00,
      originalPrice: 768.00,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400',
      quantity: 1,
      rating: 152,
      badge: { text: 'SAVE $189.00', color: '#00d93f' },
      stockStatus: 'In stock',
      isFavorite: false
    },
    {
      id: 2,
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: 979.00,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400',
      quantity: 1,
      badge: { text: 'NEW', color: '#333' },
      stockStatus: 'In stock',
      shipping: '$2.99 SHIPPING',
      isFavorite: false
    },
    {
      id: 3,
      name: 'Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone',
      price: 659.00,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=400',
      quantity: 1,
      rating: 5,
      badge: { text: 'NEW', color: '#333' },
      stockStatus: 'In stock',
      freeShipping: true,
      freeGift: true,
      isFavorite: false
    }
  ]);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'cart' }
  ];

  const updateQuantity = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const toggleFavorite = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    ));
  };

  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingCharge = 600.00;
  const taxEstimate = 137.00;
  const total = subTotal + shippingCharge + taxEstimate;

  return (
    <div className="cart-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      
      <main className="cart-container container">
        <div className="cart-content">
          <div className="cart-items-container">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item-card">
                  <div className="item-image-area">
                    <div className="item-image-wrapper">
                      <img src={item.image} alt={item.name} />
                      {item.badge && (
                        <span className="item-badge" style={{ backgroundColor: item.badge.color }}>
                          {item.badge.text}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="item-details-area">
                    {item.rating && <span className="item-rating">({item.rating})</span>}
                    <h3 className="item-title">{item.name}</h3>
                    <div className="item-price-row">
                      <span className="current-price">${item.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="item-controls">
                      <div className="quantity-selector">
                        <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                        <input type="text" value={item.quantity} readOnly />
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </div>
                    
                    <div className="item-features">
                      {item.freeShipping && <span className="feature-badge green">FREE SHIPPING</span>}
                      {item.freeGift && <span className="feature-badge pink">FREE GIFT</span>}
                      {item.shipping && <span className="feature-shipping">{item.shipping}</span>}
                    </div>
                    
                    <div className="item-status">
                      <span className="status-dot"></span>
                      {item.stockStatus}
                    </div>
                  </div>
                  
                  <div className="item-actions-area">
                    <div className="action-icons">
                      <button 
                        className={`icon-btn heart ${item.isFavorite ? 'active' : ''}`}
                        onClick={() => toggleFavorite(item.id)}
                        title={item.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={item.isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                      </button>
                      <button className="icon-btn remove" title="Remove from cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="order-summary-sidebar">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Sub Total:</span>
                <strong>${subTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              </div>
              <div className="summary-row">
                <span>Shpping estimate:</span>
                <strong>${shippingCharge.toFixed(2)}</strong>
              </div>
              <div className="summary-row">
                <span>Tax estimate:</span>
                <strong>${taxEstimate.toFixed(2)}</strong>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>ORDER TOTAL:</span>
                <strong>${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
              </div>
              
              <Link to="/checkout" className="checkout-btn" style={{ display: 'block', textAlign: 'center', boxSizing: 'border-box', textDecoration: 'none' }}>CHECKOUT</Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
