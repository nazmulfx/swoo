import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="container search-container">
        <div className="search-input-group">
          <div className="category-dropdown">
            <span>All Categories</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <input type="text" placeholder="Search anything..." className="search-input" />
          <div className="search-icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        
        <div className="feature-links">
          <div className="feature-item">
            <span>FREE SHIPPING OVER $199</span>
          </div>
          <div className="feature-item">
            <span>30 DAYS MONEY BACK</span>
          </div>
          <div className="feature-item">
            <span>100% SECURE PAYMENT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
