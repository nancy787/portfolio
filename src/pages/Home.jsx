import React, { useState } from 'react';

const Home = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [hoveredHire, setHoveredHire] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 2rem',
        width: '100%',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left Content */}
          <div
            style={{
              animation: 'fadeIn 0.8s ease-out',
            }}
          >
            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateX(-30px); }
                  to { opacity: 1; transform: translateX(0); }
                }
              `}
            </style>

            {/* Name Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ 
                  fontSize: '2rem', 
                  fontWeight: 600, 
                  background: 'linear-gradient(90deg, #6b7280, #3b82f6, #6b7280)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'textGradient 3s ease infinite',
                }}>
                  Hello, I'm
                </span>
                <style>
                  {`
                    @keyframes textGradient {
                      0%, 100% { background-position: 0% center; }
                      50% { background-position: 100% center; }
                    }
                  `}
                </style>
                <div
                  style={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
                  }}
                >
                  {/* Shine effect */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'shine 3s infinite',
                    }}
                  />
                  <style>
                    {`
                      @keyframes shine {
                        0%, 100% { left: -100%; }
                        50% { left: 100%; }
                      }
                    `}
                  </style>
                  <span style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    color: 'white',
                    position: 'relative',
                    zIndex: 1,
                    letterSpacing: '0.5px',
                  }}>
                    Kenzy
                  </span>
                  {/* Decorative dot */}
                  <span style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#60a5fa',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                  }} />
                  <style>
                    {`
                      @keyframes pulse {
                        0%, 100% { opacity: 1; transform: scale(1); }
                        50% { opacity: 0.5; transform: scale(1.2); }
                      }
                    `}
                  </style>
                </div>
                <span style={{ fontSize: '1.5rem', animation: 'wave 2s ease-in-out infinite', display: 'inline-block', transformOrigin: '70% 70%' }}>👋</span>
              </div>
            </div>
            <style>
              {`
                @keyframes wave {
                  0%, 100% { transform: rotate(0deg); }
                  10%, 30% { transform: rotate(14deg); }
                  20% { transform: rotate(-8deg); }
                  40%, 60% { transform: rotate(14deg); }
                  50% { transform: rotate(-8deg); }
                  70% { transform: rotate(0deg); }
                }
              `}
            </style>

            {/* Main Title */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 700,
                color: '#111827',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              Nancy Kumari
            </h1>

            {/* Subtitle */}
            <div style={{ marginBottom: '2rem' }}>
              <h2
                style={{
                  fontSize: '1.5rem',
                  color: '#6b7280',
                  fontWeight: 500,
                  marginBottom: '1rem',
                }}
              >
                Software Developer | Backend Engineer
              </h2>
              
              {/* Experience Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: '2px solid #3b82f6',
                animation: 'float 3s ease-in-out infinite',
              }}>
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                <span style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  3+ Years Experience
                </span>
              </div>
              <style>
                {`
                  @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                  }
                `}
              </style>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <button
                onMouseEnter={() => setHoveredHire(true)}
                onMouseLeave={() => setHoveredHire(false)}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  transform: hoveredHire ? 'scale(1.1) translateY(-3px)' : 'scale(1)',
                }}
              >
                Hire Me Now
              </button>

              <button
                onMouseEnter={() => setHoveredArrow(true)}
                onMouseLeave={() => setHoveredArrow(false)}
                style={{
                  width: '56px',
                  height: '56px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  transform: hoveredArrow ? 'scale(1.1) rotate(45deg)' : 'scale(1)',
                }}
              >
                ↗️
              </button>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['💻', '💼', '📸', '📈'].map((icon, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: hoveredSocial === index ? '#3b82f6' : '#eff6ff',
                    color: hoveredSocial === index ? 'white' : '#3b82f6',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: hoveredSocial === index ? 'scale(1.1) translateY(-3px)' : 'scale(1)',
                    boxShadow: hoveredSocial === index ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
                  }}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
            <div
              style={{
                position: 'relative',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '500px',
              }}
            >
              {/* Decorative circle with rotation */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '450px',
                  height: '450px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #e9d5ff 100%)',
                  borderRadius: '50%',
                  top: '-40px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  transition: 'transform 0.5s ease',
                  animation: 'rotate 20s linear infinite',
                  zIndex: 0,
                }}
              />
              <style>
                {`
                  @keyframes rotate {
                    from { transform: translateX(-50%) rotate(0deg); }
                    to { transform: translateX(-50%) rotate(360deg); }
                  }
                `}
              </style>

              {/* Profile placeholder */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: '350px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  transition: 'transform 0.5s ease',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                👤
              </div>

              {/* Floating badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: 'calc(50% - 200px)',
                  backgroundColor: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  fontSize: '1.8rem',
                  transition: 'transform 0.3s ease',
                  zIndex: 2,
                }}
              >
                💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;