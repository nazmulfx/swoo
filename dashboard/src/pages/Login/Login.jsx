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
              <defs>
                <linearGradient id="loginGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00d93f', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#00c639', stopOpacity: 1 }} />
                </linearGradient>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                  <feOffset dx="0" dy="5" result="offsetblur" />
                  <feComponentTransfer><feFuncA type="linear" slope="0.1" /></feComponentTransfer>
                  <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Login/Access Metaphor */}
              <g filter="url(#shadow)">
                {/* Large Secure Vault/Background */}
                <rect x="150" y="80" width="200" height="240" rx="30" fill="#f8f9fa" stroke="#00d93f" strokeWidth="2" strokeDasharray="10 5" opacity="0.3" />
                
                {/* The Secure Lock */}
                <g transform="translate(200, 130)">
                  <rect x="0" y="25" width="100" height="75" rx="15" fill="#2c1a5f" />
                  <path d="M20 25 V10 Q20 -15 50 -15 Q80 -15 80 10 V25" stroke="#7a5cf5" strokeWidth="12" fill="none" />
                  <circle cx="50" cy="62" r="10" fill="#fff" opacity="0.2" />
                  <rect x="47" y="70" width="6" height="15" fill="#fff" opacity="0.2" />
                </g>

                {/* The Modern Primary Key */}
                <g transform="translate(260, 200) rotate(-45)">
                  <circle cx="30" cy="30" r="22" fill="none" stroke="url(#loginGrad)" strokeWidth="12" />
                  <rect x="30" y="24" width="80" height="12" rx="6" fill="url(#loginGrad)" />
                  <rect x="70" y="36" width="15" height="12" rx="3" fill="url(#loginGrad)" />
                  <rect x="95" y="36" width="15" height="12" rx="3" fill="url(#loginGrad)" />
                </g>
              </g>

              {/* Floating Success Cues */}
              <circle cx="100" cy="100" r="10" fill="#00d93f" opacity="0.2" />
              <circle cx="400" cy="300" r="15" fill="#7a5cf5" opacity="0.1" />
              <path d="M420 80 L440 100 L460 70" stroke="#00d93f" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
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
