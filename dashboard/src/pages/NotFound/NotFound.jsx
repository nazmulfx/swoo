import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './NotFound.css';

const NotFound = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="not-found-page">
            <Navbar />
            
            <main className="not-found-content container">
                <div className="illustration-container">
                    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="not-found-svg">
                        {/* Background Shapes */}
                        <circle cx="80" cy="60" r="40" fill="#FF6B6B" fillOpacity="0.1" />
                        <circle cx="320" cy="240" r="60" fill="#4D96FF" fillOpacity="0.1" />
                        <rect x="300" y="40" width="40" height="40" rx="8" transform="rotate(15 300 40)" fill="#FFD93D" fillOpacity="0.1" />
                        
                        {/* Main 404 Text with Gradient */}
                        <defs>
                            <linearGradient id="textGradient" x1="0" y1="0" x2="100%" y2="0">
                                <stop offset="0%" stopColor="#00bf37" />
                                <stop offset="50%" stopColor="#4D96FF" />
                                <stop offset="100%" stopColor="#FF6B6B" />
                            </linearGradient>
                        </defs>
                        
                        <text x="50%" y="45%" dominantBaseline="middle" textAnchor="middle" className="svg-404-text">404</text>
                        
                        {/* Search Icon / Broken Element */}
                        <g transform="translate(170, 160)">
                            <circle cx="30" cy="30" r="25" stroke="#00bf37" strokeWidth="6" strokeLinecap="round" />
                            <line x1="50" y1="50" x2="75" y2="75" stroke="#00bf37" strokeWidth="8" strokeLinecap="round" />
                            <path d="M20 25Q30 15 40 25" stroke="#FF6B6B" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                        </g>
                        
                        {/* Floating Dots */}
                        <circle cx="50" cy="250" r="8" fill="#FFD93D" className="dot-1" />
                        <circle cx="350" cy="80" r="6" fill="#00bf37" className="dot-2" />
                        <circle cx="100" cy="200" r="10" fill="#4D96FF" className="dot-3" />
                    </svg>
                    <div className="error-badge">PAGE NOT FOUND</div>
                </div>

                <h1 className="error-title">Oops! Page Not Found</h1>
                <p className="error-message">
                    The page you are looking for might have been removed, had its name changed, 
                    or is temporarily unavailable. Let's get you back on track.
                </p>

                <form className="not-found-search" onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Search for products, categories..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="search-btn">SEARCH</button>
                </form>

                <Link to="/" className="back-home-link">
                    GO BACK HOME
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
            </main>

            <Footer />
        </div>
    );
};

export default NotFound;
