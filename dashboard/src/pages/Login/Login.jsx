import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'login' }
  ];

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className="login-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      
      <div className="login-section">
        <div className="container">
          <div className="login-card">
            <div className="login-illustration">
            <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
              {/* Detailed Illustration matching screenshot */}
              
              {/* Phone Frame */}
              <rect x="180" y="50" width="140" height="280" rx="20" fill="#2c1a5f" /> {/* Dark purple/blue frame */}
              <rect x="190" y="65" width="120" height="250" rx="10" fill="#fff" />
              
              {/* Lock Icon on Phone */}
              <g transform="translate(230, 130) scale(0.8)">
                <rect x="0" y="20" width="40" height="30" rx="5" fill="#7a5cf5" />
                <path d="M10 20 V10 Q10 0 20 0 Q30 0 30 10 V20" stroke="#7a5cf5" strokeWidth="6" fill="none" />
                <circle cx="20" cy="35" r="4" fill="#fff" />
              </g>
              
              {/* Gear Icons */}
              <g transform="translate(320, 80) scale(0.5)" fill="#7a5cf5">
                <circle cx="30" cy="30" r="15" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                  <rect key={deg} x="25" y="0" width="10" height="15" rx="2" transform={`rotate(${deg}, 30, 30)`} />
                ))}
              </g>
              <g transform="translate(350, 110) scale(0.3)" fill="#bdc3c7">
                 <circle cx="30" cy="30" r="15" />
              </g>

              {/* Secure Badge/Shield */}
              <g transform="translate(340, 180) scale(0.7)">
                <path d="M0 0 Q20 -10 40 0 V30 Q20 50 0 30 Z" fill="none" stroke="#2ecc71" strokeWidth="4" />
                <path d="M10 15 L20 25 L35 10" stroke="#2ecc71" strokeWidth="4" fill="none" strokeLinecap="round" />
              </g>

              {/* Chat Bubble with $ */}
              <g transform="translate(210, 100) scale(0.6)">
                <rect x="0" y="0" width="50" height="40" rx="10" fill="#00d93f" />
                <path d="M10 40 L15 50 L25 40" fill="#00d93f" />
                <text x="18" y="28" fill="#fff" fontSize="24" fontWeight="bold">$</text>
              </g>

              {/* Credit Card */}
              <g transform="translate(180, 280)">
                <rect x="0" y="0" width="100" height="65" rx="8" fill="#00bcd4" />
                <rect x="0" y="55" width="100" height="10" rx="0" fill="#0097a7" />
                <circle cx="20" cy="20" r="8" fill="#fff" opacity="0.3" />
                <rect x="15" y="45" width="70" height="4" rx="2" fill="#fff" opacity="0.5" />
              </g>

              {/* Small Character Left (Sitting on Card) */}
              <g transform="translate(210, 220) scale(0.8)">
                 <circle cx="30" cy="30" r="10" fill="#ffe0bd" />
                 <path d="M20 40 Q30 35 40 40 V70 H20 Z" fill="#f1c40f" /> {/* Yellow Shirt */}
                 <path d="M20 70 L15 90 H0" stroke="#2c3e50" strokeWidth="6" fill="none" /> {/* Legs */}
                 <path d="M40 70 L45 90 H60" stroke="#2c3e50" strokeWidth="6" fill="none" />
              </g>

              {/* Small Character Right */}
              <g transform="translate(370, 240) scale(0.8)">
                 <circle cx="30" cy="30" r="10" fill="#ffe0bd" />
                 <path d="M20 40 Q30 35 40 40 V70 H20 Z" fill="#00bcd4" /> {/* Cyan Shirt */}
                 <rect x="25" y="70" width="10" height="40" fill="#2c3e50" /> {/* Legs */}
                 <rect x="35" y="70" width="10" height="40" fill="#2c3e50" />
              </g>

              {/* Plants */}
              <g transform="translate(320, 310) scale(0.6)">
                <rect x="0" y="40" width="40" height="30" fill="#34495e" />
                <path d="M20 40 Q0 0 20 -20 Q40 0 20 40 Z" fill="#2ecc71" />
                <path d="M10 40 Q-10 10 10 -10 Q30 10 10 40 Z" fill="#27ae60" transform="rotate(-20, 10, 40)" />
              </g>
              
              <g transform="translate(360, 310) scale(0.5)">
                <rect x="0" y="40" width="40" height="30" fill="#34495e" />
                <path d="M20 40 Q0 0 20 -20 Q40 0 20 40 Z" fill="#2ecc71" />
              </g>

              {/* Three dots/stars on side */}
              <g transform="translate(380, 170) scale(0.5)">
                <rect x="0" y="0" width="30" height="25" fill="#f1c40f" />
                <circle cx="15" cy="12" r="4" fill="#fff" />
              </g>
            </svg>
          </div>
          
          <div className="login-form-area">
            <div className="login-header">
              <h1>Welcome Back</h1>
              <p>LOGIN TO CONTINUE</p>
            </div>
            
            <form onSubmit={handleSubmit} className="login-form">
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
                <a href="#" className="forgot-password">Forget Password ?</a>
              </div>
              
              <button type="submit" className="login-btn">LOGIN</button>
              
              <div className="register-now">
                <span>NEW USER ?</span> <Link to="/register">SIGN UP</Link>
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

export default Login;
