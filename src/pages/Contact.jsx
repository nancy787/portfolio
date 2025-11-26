import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:nancykumari2630@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      id="contact"
      style={{
        backgroundColor: '#e8eaf6',
        minHeight: '100vh',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        display: 'flex',
        alignItems: 'center',
        padding: isMobile ? '40px 16px' : '80px 24px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '48px' : '64px',
            alignItems: 'start'
          }}
        >
          {/* Left Side - Contact Info */}
          <div>
            <div style={{ marginBottom: isMobile ? '32px' : '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span
                  style={{
                    color: '#5C6BC0',
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  ›› STAY CONNECTED
                </span>
              </div>
              <h2
                style={{
                  fontSize: isMobile ? '2rem' : 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: 700,
                  color: '#212121',
                  marginBottom: 0,
                  lineHeight: 1.2,
                }}
              >
                Let's Work Together!
              </h2>
            </div>

            {/* Contact Info Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { label: 'Phone', value: '+91 7778009733', icon: 'phone' },
                { label: 'Email', value: 'nancykumari2630@gmail.com', icon: 'email' },
                { label: 'Address', value: 'Kharar Punjab 140301, India', icon: 'location' },
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      backgroundColor: '#6C7EFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      flexShrink: 0,
                    }}
                  >
                    {item.icon === 'phone' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="currentColor"/>
                      </svg>
                    )}
                    {item.icon === 'email' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                    {item.icon === 'location' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', color: '#757575', marginBottom: '4px', margin: 0 }}>{item.label}</p>
                    <p style={{ fontSize: '18px', fontWeight: 500, color: '#212121', margin: 0 }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: isMobile ? '32px 20px' : '48px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '16px',
                    backgroundColor: '#F5F5F7',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    fontSize: '16px',
                    backgroundColor: '#F5F5F7',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Write Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '16px',
                  backgroundColor: '#F5F5F7',
                  outline: 'none',
                  resize: 'vertical',
                  marginBottom: '24px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease',
                }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 0',
                  borderRadius: '50px',
                  border: 'none',
                  backgroundColor: '#6C7EFF',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(108, 126, 255, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#5A6CFF';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(108, 126, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6C7EFF';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(108, 126, 255, 0.3)';
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
