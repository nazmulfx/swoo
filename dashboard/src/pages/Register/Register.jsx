import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    password: '',
    confirmPassword: ''
  });

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'Register' }
  ];

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
  };

  return (
    <div className="register-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="register-section">
        <div className="container">
          <div className="register-card">
            <div className="register-illustration">
              <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="regGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00d93f', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#00c639', stopOpacity: 1 }} />
                  </linearGradient>
                  <filter id="shadowReg" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                    <feOffset dx="0" dy="5" result="offsetblur" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.1" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* Registration/Welcome Metaphor */}
                <g filter="url(#shadowReg)">
                  {/* Large Profile Card / Member ID */}
                  <rect x="120" y="80" width="260" height="180" rx="30" fill="#fff" stroke="#eee" strokeWidth="2" />
                  <rect x="120" y="220" width="260" height="40" rx="0" fill="#f0fff4" />
                  
                  {/* Avatar Circle on Card */}
                  <g transform="translate(160, 120)">
                    <circle cx="30" cy="30" r="40" fill="#e8f5e9" />
                    <circle cx="30" cy="22" r="15" fill="url(#regGrad)" />
                    <path d="M5 55 Q30 40 55 55 V60 H5 Z" fill="url(#regGrad)" />
                    <circle cx="55" cy="15" r="10" fill="#f1c40f" /> {/* Plus/Badge icon */}
                    <text x="50" y="21" fill="#fff" fontSize="16" fontWeight="bold">+</text>
                  </g>

                  {/* Lines on Card */}
                  <rect x="230" y="130" width="100" height="8" rx="4" fill="#eee" />
                  <rect x="230" y="150" width="80" height="8" rx="4" fill="#eee" />
                  <rect x="230" y="170" width="60" height="8" rx="4" fill="#00d93f" />

                  {/* Celebratory Box / Gift */}
                  <g transform="translate(320, 220) rotate(-10)">
                    <rect x="0" y="0" width="80" height="70" rx="10" fill="#2c1a5f" />
                    <rect x="0" y="15" width="80" height="15" fill="#7a5cf5" opacity="0.5" />
                    <path d="M40 0 L50 -15 L30 -15 Z" fill="#7a5cf5" /> {/* Ribbon */}
                  </g>

                  {/* Small Character (The One Joining) */}
                  <g transform="translate(80, 200)">
                    <circle cx="30" cy="30" r="12" fill="#ffe0bd" />
                    <path d="M15 45 Q30 40 45 45 L55 90 H5 Z" fill="#00bcd4" />
                    <path d="M30 45 L70 30" stroke="#2c3e50" strokeWidth="3" fill="none" /> {/* Arm reaching out */}
                  </g>
                </g>

                {/* Floating Stars / Confetti */}
                <g transform="translate(420, 80) rotate(20)" fill="#f1c40f">
                  <path d="M10 0 L13 7 L20 7 L15 12 L17 20 L10 15 L3 20 L5 12 L0 7 L7 7 Z" />
                </g>
                <circle cx="100" cy="60" r="8" fill="#00d93f" opacity="0.3" />
                <circle cx="450" cy="200" r="6" fill="#7a5cf5" opacity="0.4" />
                <rect x="380" y="300" width="12" height="12" fill="#e74c3c" transform="rotate(45)" opacity="0.3" />
              </svg>
            </div>
            
            <div className="register-form-area">
              <div className="register-header">
                <h1>Register</h1>
                <p>JOIN TO US</p>
              </div>
              
              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Jhon Deo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Example@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="...."
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button 
                      type="button" 
                      className="password-toggle" 
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="...."
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <button 
                      type="button" 
                      className="password-toggle" 
                      onClick={handleToggleConfirmPassword}
                    >
                      {showConfirmPassword ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <button type="submit" className="register-btn">REGISTER</button>
                
                <div className="login-now">
                  <span>ALREADY USER ?</span> <Link to="/login">LOGIN</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Register;
