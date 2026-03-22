import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Footer from '../../components/Footer/Footer';
import './Checkout.css';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [selectedAddressId, setSelectedAddressId] = useState(1);

  // Dummy data representing cart items on checkout
  const cartItems = [
    {
      id: 1,
      name: 'SROK Smart Phone 128GB, Oled Retina',
      price: 579.00,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=400',
      quantity: 1
    },
    {
      id: 2,
      name: 'aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB',
      price: 979.00,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=400',
      quantity: 1
    }
  ];

  const [showAddressModal, setShowAddressModal] = useState(false);
  const initialAddressForm = {
    type: 'Home',
    name: '',
    address: '',
    phone: '',
    country: 'US',
    city: '',
    state: '',
    zip: '',
    houseNo: '',
    streetNo: '',
    postalCode: '',
    isDefault: false
  };
  const [addressForm, setAddressForm] = useState(initialAddressForm);

  const [addresses, setAddresses] = useState([
    { 
      id: 1, 
      type: 'Home Address', 
      name: 'Mark Cole', 
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      phone: '(209) 555-0104',
      isDefault: true
    },
    { 
      id: 2, 
      type: 'Office Address', 
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

    const newAddr = {
      id: addresses.length + 1,
      ...addressForm,
      address: formattedAddress,
      rawAddress: address
    };
    
    setAddresses([...addresses, newAddr]);
    setSelectedAddressId(newAddr.id);
    setShowAddressModal(false);
    setAddressForm(initialAddressForm);
  };

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (!couponCode.trim()) return;
    
    if (couponCode.trim().toUpperCase() === 'SWOO20') {
      setAppliedCoupon({ code: 'SWOO20', discount: 20 });
      showNotification('Coupon applied successfully!', 'success');
    } else if (couponCode.trim().toUpperCase() === 'MINUS50') {
      setAppliedCoupon({ code: 'MINUS50', flatDiscount: 50 });
      showNotification('Coupon applied successfully!', 'success');
    } else {
      setCouponError('Invalid or expired coupon code');
      showNotification('Invalid or expired coupon code!', 'error');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const subTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingCharge = 600.00;
  const taxEstimate = 137.00;
  
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discount) {
      discountAmount = (subTotal * appliedCoupon.discount) / 100;
    } else if (appliedCoupon.flatDiscount) {
      discountAmount = appliedCoupon.flatDiscount;
    }
  }

  const total = Math.max(0, subTotal + shippingCharge + taxEstimate - discountAmount);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Shop', link: '#' },
    { label: 'Checkout' }
  ];

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-page">
      <Navbar />
      <Breadcrumb items={breadcrumbItems} />

      {/* Toast Notification */}
      <div className={`coupon-toast ${notification.show ? 'show' : ''} ${notification.type}`}>
        {notification.type === 'success' ? '✅' : '❌'} {notification.message}
      </div>

      <main className="checkout-container container">

        {/* Full Width Top Section: Items */}
        <section className="checkout-fullwidth-items checkout-premium-card" style={{ padding: '0 40px', paddingTop: '40px' }}>
          <div className="checkout-items-table">
            <div className="checkout-table-header">
              <div className="th-product">PRODUCT NAME</div>
              <div className="th-price">PRICE</div>
              <div className="th-quantity">QUANTITY</div>
              <div className="th-subtotal">SUB TOTAL</div>
              <div className="th-action"></div>
            </div>
            
            <div className="checkout-table-body">
              {cartItems.map(item => (
                <div key={item.id} className="checkout-table-row">
                  <div className="td-product">
                    <img src={item.image} alt={item.name} className="product-thumb" />
                    <span className="product-name">{item.name}</span>
                  </div>
                  <div className="td-price">${item.price.toFixed(2)}</div>
                  <div className="td-quantity">
                    <div className="qty-selector">
                      <span>{item.quantity}</span>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  <div className="td-subtotal">${(item.price * item.quantity).toFixed(2)}</div>
                  <div className="td-action">
                    <button type="button" className="checkout-remove-btn" title="Remove item">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <form className="checkout-bottom-layout" onSubmit={handlePlaceOrder}>
          {/* Left Column: Address Selection */}
          <div className="checkout-address-section">
            <div className="checkout-premium-card" style={{ marginBottom: '30px' }}>
              <h2 className="checkout-section-title">Payment Method</h2>
              <div className="payment-methods">
                <div className={`payment-method ${paymentMethod === 'credit-card' ? 'active' : ''}`}>
                  <label>
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="custom-radio"></span>
                    <span className="method-name">Credit Card</span>
                  </label>
                  {paymentMethod === 'credit-card' && (
                    <div className="payment-details">
                      <p>Pay securely using your credit card.</p>
                      <div className="input-wrapper">
                        <input type="text" placeholder="Card Number" style={{ marginBottom: '10px' }} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <input type="text" placeholder="MM/YY" />
                          <input type="text" placeholder="CVC" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}>
                  <label>
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="custom-radio"></span>
                    <span className="method-name">PayPal</span>
                  </label>
                  {paymentMethod === 'paypal' && (
                    <div className="payment-details">
                      <p>You will be redirected to PayPal to complete your purchase securely.</p>
                    </div>
                  )}
                </div>

                <div className={`payment-method ${paymentMethod === 'cod' ? 'active' : ''}`}>
                  <label>
                    <input 
                      type="radio" 
                      name="payment_method" 
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span className="custom-radio"></span>
                    <span className="method-name">Cash on Delivery</span>
                  </label>
                  {paymentMethod === 'cod' && (
                    <div className="payment-details">
                      <p>Pay with cash upon delivery.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="checkout-premium-card">
              <h2 className="checkout-section-title">Shipping & Billing Address</h2>
              
              <div className="checkout-address-grid">
                {addresses.map((addr) => (
                  <div 
                    key={addr.id} 
                    className={`checkout-address-card ${selectedAddressId === addr.id ? 'selected' : ''}`}
                    onClick={() => setSelectedAddressId(addr.id)}
                  >
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
                      <div className={`selection-indicator ${selectedAddressId === addr.id ? 'active' : ''}`}>
                        {selectedAddressId === addr.id ? '✓ SELECTED' : 'SELECT'}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="checkout-add-new-address" onClick={() => setShowAddressModal(true)}>
                  <div className="add-icon">+</div>
                  <span>Add New Address</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Billing Details / Order Summary */}
          <aside className="checkout-summary-section">
            <div className="checkout-premium-card coupon-card" style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, margin: '0 0 15px 0' }}>Have a Coupon?</h3>
              <div className="coupon-form">
                <input 
                  type="text" 
                  placeholder="Enter code (Try SWOO20)" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                  onKeyDown={(e) => { 
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleApplyCoupon(e);
                    }
                  }}
                  disabled={appliedCoupon !== null}
                />
                <button type="button" onClick={handleApplyCoupon} disabled={appliedCoupon !== null || !couponCode.trim()}>
                  {appliedCoupon ? 'APPLIED' : 'APPLY'}
                </button>
              </div>
              {couponError && <p className="coupon-error">{couponError}</p>}
              {appliedCoupon && (
                <div className="applied-coupon-msg">
                  <div className="applied-icon">✓</div>
                  <div className="applied-text">
                    <strong>{appliedCoupon.code}</strong> applied!
                  </div>
                  <button type="button" onClick={handleRemoveCoupon} className="remove-coupon" title="Remove coupon">&times;</button>
                </div>
              )}
            </div>

            <div className="checkout-premium-card summary-card">
              <h2 className="checkout-section-title">Billing Details</h2>

              <div className="summary-row-container">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>${subTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <strong>${shippingCharge.toFixed(2)}</strong>
                </div>
                <div className="summary-row">
                  <span>Tax</span>
                  <strong>${taxEstimate.toFixed(2)}</strong>
                </div>
                {appliedCoupon && (
                  <div className="summary-row discount">
                    <span>Discount ({appliedCoupon.discount ? `${appliedCoupon.discount}%` : 'Flat'}):</span>
                    <strong>-${discountAmount.toFixed(2)}</strong>
                  </div>
                )}
                <div className="summary-divider"></div>
                <div className="summary-row total">
                  <span>Total</span>
                  <strong className="total-price">${total.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong>
                </div>
              </div>

              <p className="privacy-policy-text">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to="/terms">privacy policy</Link>.
              </p>

              <button type="submit" className="place-order-btn">PLACE ORDER</button>
            </div>
          </aside>
        </form>
      </main>

      {/* Address Modal */}
      {showAddressModal && (
        <div className="modal-overlay">
          <div className="modal-card address-modal">
            <div className="modal-header">
              <h2>Add New Address</h2>
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
                <button type="submit" className="submit-btn">ADD ADDRESS</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
