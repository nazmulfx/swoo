import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll state on route change
    setIsScrolled(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper" style={{ height: '126px', zIndex: 1000, position: 'relative' }}>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container flex justify-between align-center">
          <div className="top-left flex align-center">
            <div className="hotline flex align-center">
              <span className="badge">Hotline 24/7</span>
              <span className="phone">(025) 3886 25 16</span>
            </div>
          </div>
          <div className="top-right flex align-center gap-4">
            <a href="#">Sell on Swoo</a>
            <a href="#">Order Trackig</a>
            <div className="divider"></div>
            <div className="dropdown flex align-center gap-1">
              <span>USD</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="main-bar">
        <div className="container flex justify-between align-center">
          <div className="logo flex align-center gap-2">
            <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#00d93f"/>
                    <path d="M12 20C12 24.4183 15.5817 28 20 28C24.4183 28 28 24.4183 28 20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>
            <div className="logo-text">
              <span className="brand">SWOO</span>
              <span className="tagline">TECH MART</span>
            </div>
          </div>

          <ul className="nav-links flex gap-4">
            <li className="active"><a href="#" className="flex align-center gap-1">HOMES <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
            <li><a href="#" className="flex align-center gap-1">PAGES <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
            <li><a href="#" className="flex align-center gap-1">PRODUCTS <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>

          <div className="user-actions flex align-center gap-4">
            <div className="flex gap-2">
                <button className="action-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
                <button className="action-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
            </div>
            
            <div className="user-login flex align-center gap-3">
              <Link to="/profile" className="user-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark)', overflow: 'hidden' }}>
                <img 
                  src="https://api.dicebear.com/7.x/notionists/svg?seed=Mark&backgroundColor=f0f2f5" 
                  alt="User Avatar" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </Link>
              <div className="login-text">
                <span className="label">WELCOME</span>
                <span className="value">
                  <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>LOG IN</Link>
                  <span style={{ margin: '0 4px', color: 'var(--text-secondary)' }}>/</span>
                  <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>REGISTER</Link>
                </span>
              </div>
            </div>

            <Link to="/cart" className="cart-action flex align-center gap-3" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="cart-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span className="cart-badge">3</span>
              </div>
              <div className="cart-text">
                <span className="label">CART</span>
                <span className="value">$2,217.00</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-border"></div>
    </nav>
    </header>
  );
};

export default Navbar;
