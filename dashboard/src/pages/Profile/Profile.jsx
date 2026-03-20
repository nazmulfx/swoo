import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: 'Mark',
    lastName: 'Cole',
    email: 'swoo@gmail.com',
    phone: '+1 0231 4554 452',
    age: '',
    gender: '',
    profession: ''
  });

  const [activeTab, setActiveTab] = useState('Account info');
  const [showToast, setShowToast] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const genderRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (genderRef.current && !genderRef.current.contains(event.target)) {
        setGenderOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const [avatar, setAvatar] = useState(`data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none'><rect width='24' height='24' rx='12' fill='%23f0f2f5'/><circle cx='12' cy='8' r='3.5' fill='%23adb5bd'/><path d='M4.5 19.5C4.5 16.4624 6.96243 14 10 14H14C17.0376 14 19.5 16.4624 19.5 19.5V20C19.5 21.1046 18.6046 22 17.5 22H6.5C5.39543 22 4.5 21.1046 4.5 20V19.5Z' fill='%23adb5bd'/></svg>`);
  const fileInputRef = React.useRef(null);
  
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  
  const initialAddressForm = {
    type: 'Home',
    name: 'Mark Cole',
    address: '',
    phone: '',
    country: 'BD',
    city: '',
    state: '',
    zip: '',
    houseNo: '',
    streetNo: '',
    postalCode: '',
    isDefault: false
  };

  const [addressForm, setAddressForm] = useState(initialAddressForm);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  // Mock Orders Data
  const orders = [
    { id: '#SW-2501', date: 'Oct 24, 2023', status: 'Delivered', total: '$579.00' },
    { id: '#SW-2489', date: 'Sep 12, 2023', status: 'Shipped', total: '$1,240.00' },
    { id: '#SW-2432', date: 'Aug 05, 2023', status: 'Cancelled', total: '$89.00' }
  ];

  // Addresses State
  const [addresses, setAddresses] = useState([
    { 
      id: 1, 
      type: 'Billing Address', 
      name: 'Mark Cole', 
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      phone: '(209) 555-0104',
      isDefault: true
    },
    { 
      id: 2, 
      type: 'Shipping Address', 
      name: 'Mark Cole', 
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      phone: '(406) 555-0120',
      isDefault: false
    }
  ]);

  const handleAddressInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddressForm({
      ...addressForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleEditAddress = (addr) => {
    setEditingAddressId(addr.id);
    // If we have raw components saved, use them. Otherwise, we'll need to parse or just use defaults.
    // For this mock, we'll assume we have them or just populate what we can.
    setAddressForm({
      type: addr.type || 'Home',
      name: addr.name || '',
      phone: addr.phone || '',
      country: addr.country || 'BD',
      city: addr.city || '',
      state: addr.state || '',
      zip: addr.zip || '',
      houseNo: addr.houseNo || '',
      streetNo: addr.streetNo || '',
      postalCode: addr.postalCode || '',
      address: addr.rawAddress || '', // We should save the base address too
      isDefault: addr.isDefault || false
    });
    setShowAddressModal(true);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    const { houseNo, streetNo, address, city, state, zip, postalCode } = addressForm;
    const fullAddressParts = [
      houseNo && `House: ${houseNo}`,
      streetNo && `Street: ${streetNo}`,
      address,
      city,
      state,
      zip || postalCode
    ].filter(Boolean);

    const formattedAddress = fullAddressParts.join(', ');

    if (editingAddressId) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddressId 
          ? { ...addr, ...addressForm, address: formattedAddress, rawAddress: address }
          : addr
      ));
    } else {
      const newAddr = {
        id: addresses.length + 1,
        ...addressForm,
        address: formattedAddress,
        rawAddress: address
      };
      setAddresses([...addresses, newAddr]);
    }

    setShowAddressModal(false);
    setEditingAddressId(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setAddressForm(initialAddressForm);
  };

  const openAddAddressModal = () => {
    setEditingAddressId(null);
    setAddressForm(initialAddressForm);
    setShowAddressModal(true);
  };

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'pages', link: '#' },
    { label: 'profile' }
  ];

  const menuItems = [
    { name: 'Account info' },
    { name: 'My order' },
    { name: 'My address' },
    { name: 'Settings' }
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
                <div className="avatar-container" onClick={handleAvatarClick} style={{ cursor: 'pointer', position: 'relative' }}>
                  <img 
                    src={avatar} 
                    alt="User Avatar" 
                  />
                  <div className="avatar-edit-overlay">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                  </div>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleAvatarChange} 
                    style={{ display: 'none' }} 
                    accept="image/*"
                  />
                </div>
                <h2 className="user-name">{formData.firstName} {formData.lastName}</h2>
                <p className="user-email">{formData.email}</p>
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
              <h1 className="content-title">{activeTab}</h1>
              
              {activeTab === 'Account info' && (
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
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number <span className="required">*</span></label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange}
                        placeholder="+1 0000 0000 000"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Age (Optional)</label>
                      <input 
                        type="number" 
                        name="age" 
                        value={formData.age} 
                        onChange={handleChange}
                        placeholder="e.g. 25"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Gender (Optional)</label>
                      <div className="custom-select-wrapper" ref={genderRef}>
                        <div 
                          className={`custom-select-trigger ${genderOpen ? 'open' : ''}`} 
                          onClick={() => setGenderOpen(!genderOpen)}
                        >
                          <span>{formData.gender || 'Select Gender'}</span>
                          <svg className="arrow-icon" width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        {genderOpen && (
                          <div className="custom-select-menu">
                            {['Male', 'Female', 'Other'].map(option => (
                              <div 
                                key={option} 
                                className={`custom-select-item ${formData.gender === option ? 'active' : ''}`}
                                onClick={() => {
                                  setFormData({ ...formData, gender: option });
                                  setGenderOpen(false);
                                }}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Profession (Optional)</label>
                      <input 
                        type="text" 
                        name="profession" 
                        value={formData.profession} 
                        onChange={handleChange}
                        placeholder="e.g. Software Engineer"
                      />
                    </div>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="save-btn">SAVE CHANGES</button>
                  </div>
                </form>
              )}

              {activeTab === 'My order' && (
                <div className="orders-container">
                  <table className="orders-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="order-id">{order.id}</td>
                          <td>{order.date}</td>
                          <td>
                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="order-total">{order.total}</td>
                          <td>
                            <button className="view-details">VIEW DETAILS</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'My address' && (
                <div className="address-grid">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="address-card">
                      <div className="address-header">
                        <h3>{addr.type}</h3>
                        {addr.isDefault && <span className="default-badge">DEFAULT</span>}
                      </div>
                      <div className="address-body">
                        <p className="addr-name">{addr.name}</p>
                        <p className="addr-text">{addr.address}</p>
                        <p className="addr-phone">Phone: {addr.phone}</p>
                      </div>
                      <div className="address-actions">
                        <button className="edit-addr" onClick={() => handleEditAddress(addr)}>EDIT ADDRESS</button>
                      </div>
                    </div>
                  ))}
                  <button className="add-new-address" onClick={openAddAddressModal}>
                    <div className="add-icon">+</div>
                    <span>Add New Address</span>
                  </button>
                </div>
              )}

              {/* Address Modal */}
              {showAddressModal && (
                <div className="modal-overlay">
                  <div className="modal-card address-modal">
                    <div className="modal-header">
                      <h2>{editingAddressId ? 'Edit Address' : 'Add New Address'}</h2>
                      <button className="close-modal" onClick={() => setShowAddressModal(false)}>&times;</button>
                    </div>
                    <form onSubmit={handleAddressSubmit} className="modal-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label>Full Name <span className="required">*</span></label>
                          <input 
                            type="text" 
                            name="name" 
                            value={addressForm.name} 
                            onChange={handleAddressInputChange} 
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>Phone Number <span className="required">*</span></label>
                          <input 
                            type="tel" 
                            name="phone" 
                            value={addressForm.phone} 
                            onChange={handleAddressInputChange} 
                            required 
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Address Type</label>
                          <select name="type" value={addressForm.type} onChange={handleAddressInputChange}>
                            <option value="Home">Home</option>
                            <option value="Office">Office</option>
                            <option value="Billing Address">Billing Address</option>
                            <option value="Shipping Address">Shipping Address</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label>Country <span className="required">*</span></label>
                          <select 
                            name="country" 
                            value={addressForm.country} 
                            onChange={handleAddressInputChange} 
                            required
                          >
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="BD">Bangladesh</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>House Name/NO (Optional)</label>
                          <input 
                            type="text" 
                            name="houseNo" 
                            value={addressForm.houseNo} 
                            onChange={handleAddressInputChange} 
                          />
                        </div>
                        <div className="form-group">
                          <label>Street NO (Optional)</label>
                          <input 
                            type="text" 
                            name="streetNo" 
                            value={addressForm.streetNo} 
                            onChange={handleAddressInputChange} 
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>City <span className="required">*</span></label>
                          <input 
                            type="text" 
                            name="city" 
                            value={addressForm.city} 
                            onChange={handleAddressInputChange} 
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>State/Province <span className="required">*</span></label>
                          <input 
                            type="text" 
                            name="state" 
                            value={addressForm.state} 
                            onChange={handleAddressInputChange} 
                            required 
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label>Zip Code <span className="required">*</span></label>
                          <input 
                            type="text" 
                            name="zip" 
                            value={addressForm.zip} 
                            onChange={handleAddressInputChange} 
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label>Postal Code (Optional)</label>
                          <input 
                            type="text" 
                            name="postalCode" 
                            value={addressForm.postalCode} 
                            onChange={handleAddressInputChange} 
                          />
                        </div>
                      </div>

                      <div className="form-group full-width">
                        <label>Full Address <span className="required">*</span></label>
                        <textarea 
                          name="address" 
                          value={addressForm.address} 
                          onChange={handleAddressInputChange} 
                          placeholder="Street name, house number, etc."
                          required
                        ></textarea>
                      </div>

                      <div className="form-group checkbox-group">
                        <label className="checkbox-container">
                          <input 
                            type="checkbox" 
                            name="isDefault" 
                            checked={addressForm.isDefault} 
                            onChange={handleAddressInputChange} 
                          />
                          <span className="checkmark"></span>
                          Set as Default Address
                        </label>
                      </div>

                      <div className="modal-actions">
                        <button type="button" className="cancel-btn" onClick={() => setShowAddressModal(false)}>CANCEL</button>
                        <button type="submit" className="submit-btn">
                          {editingAddressId ? 'UPDATE ADDRESS' : 'ADD ADDRESS'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {activeTab === 'Settings' && (
                <div className="settings-container">
                  <form onSubmit={handleSubmit} className="settings-form">
                    <h3 className="section-subtitle">Change Password</h3>
                    <div className="form-group full-width">
                      <label>Current Password</label>
                      <input type="password" placeholder="••••••••" />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>New Password</label>
                        <input type="password" placeholder="••••••••" />
                      </div>
                      <div className="form-group">
                        <label>Confirm New Password</label>
                        <input type="password" placeholder="••••••••" />
                      </div>
                    </div>

                    <h3 className="section-subtitle" style={{marginTop: '40px'}}>Email Settings</h3>
                    <div className="form-group full-width">
                      <label>New Email Address</label>
                      <input type="email" value={formData.email} onChange={handleChange} name="email" />
                    </div>

                    <div className="form-actions">
                      <button type="submit" className="save-btn">UPDATE SETTINGS</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
