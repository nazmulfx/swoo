import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Mark',
    lastName: 'Cole',
    email: 'swoo@gmail.com',
    phone: '+1 0231 4554 452'
  });

  const [activeTab, setActiveTab] = useState('Account info');
  const [showToast, setShowToast] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'profile' }
  ];

  const menuItems = [
    { name: 'Account info', icon: true },
    { name: 'My order', icon: true },
    { name: 'My address', icon: true },
    { name: 'Change password', icon: true }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    
    // Show custom toast
    setShowToast(true);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="profile-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Success Toast */}
      {showToast && (
        <div className="toast-success">
          <div className="toast-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Profile updated successfully!</span>
          </div>
        </div>
      )}
      
      <main className="profile-container container">
        <div className="profile-layout">
          {/* Sidebar */}
          <aside className="profile-sidebar">
            <div className="sidebar-island">
              <div className="user-profile-summary">
                <div className="avatar-container">
                  <img 
                    src="https://api.dicebear.com/7.x/notionists/svg?seed=Mark&backgroundColor=f0f2f5" 
                    alt="User Avatar" 
                  />
                </div>
                <h2 className="user-name">Mark Cole</h2>
                <p className="user-email">swoo@gmail.com</p>
              </div>
              
              <nav className="profile-nav">
                {menuItems.map((item) => (
                  <button 
                    key={item.name}
                    className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.name)}
                  >
                    <span>{item.name}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </nav>
            </div>
          </aside>
          
          {/* Main Content */}
          <section className="profile-main-content">
            <div className="content-island">
              <h1 className="content-title">Account Info</h1>
              
              <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={formData.firstName} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name <span className="required">*</span></label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={formData.lastName} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <label>Email Address <span className="required">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group full-width">
                  <label>Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    placeholder="+1 0000 0000 000"
                  />
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="save-btn">SAVE</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
