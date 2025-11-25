import React, { useState, useEffect } from 'react';
import DigitalFoxLogo from "../assets/digitalfox_logo.jpeg"
import ebizonLogo from "../assets/ebizon_logo.jpeg"
import NewSpiritzLogo from "../assets/new_spiritz_logo.jpeg"
import VsatLogo from "../assets/vsat_logo.jpeg"

const WorkExperience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      title: 'Software Developer',
      period: 'May 2025 - Present',
      company: 'New Spiritz',
      logo: NewSpiritzLogo,
      description: 'Built robust backend systems and APIs with Stripe and AI chatbot integration, delivering secure transactions, high performance, and seamless user experiences.',
      logoColor: '#F59E0B',
    },
    {
      title: 'Analyst Programmer',
      period: 'May 2024 - May 2025',
      company: 'EbizON',
      logo: ebizonLogo,
      description: 'Built robust backend systems and APIs powering web platforms, ensuring performance and maintainability using Node.js & Laravel.',
      logoColor: '#FFD700',
    },
    {
      title: 'Laravel Developer',
      period: 'July 2022 - April 2024',
      company: 'DigitalFox',
      logo: DigitalFoxLogo,
      description: 'Enhanced existing projects and contributed to scalable software solutions, focusing on clean architecture and modular design.',
      logoColor: '#00000',
    },
    {
      title: 'Web Developer Intern',
      period: 'Feb 2022 - March 2022',
      company: 'VSAT Analytics',
      logo: VsatLogo,
      description: 'Designed responsive websites with user-friendly interfaces, optimized performance, and clean, maintainable code.',
      logoColor: '#10B981',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#f1f5f9',
        minHeight: '100vh',
        padding: isMobile ? '60px 20px' : '100px 40px',
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '60px' : '80px' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '30px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                color: '#3B82F6',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
              }}
            >
              ✦ Career Journey
            </span>
          </div>
          <h2
            style={{
              fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#1e293b',
              margin: '0 0 16px 0',
              letterSpacing: '-1px',
            }}
          >
            Work Experience
          </h2>
          <p
            style={{
              fontSize: isMobile ? '16px' : '18px',
              color: '#64748b',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Building innovative solutions and driving impact across diverse projects
          </p>
        </div>

        {/* Experience Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: isMobile ? '32px' : '40px',
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: isMobile ? '32px 24px' : '40px 32px',
                border: '1px solid #e2e8f0',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.boxShadow = `0 20px 60px ${exp.logoColor}30`;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = `${exp.logoColor}40`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }
              }}
            >
              {/* Top Accent Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${exp.logoColor} 0%, ${exp.logoColor}80 100%)`,
                }}
              />

              {/* Status Badge */}
              {exp.status === 'Current' && (
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '6px 14px',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#10B981',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#10B981',
                      animation: 'pulse 2s ease-in-out infinite',
                    }}
                  />
                  Current
                </div>
              )}

              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'flex-start',
                  marginBottom: '28px',
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#1e293b',
                    margin: 0,
                    letterSpacing: '-0.5px',
                  }}
                >
                  {exp.title}
                </h3>
                <span
                  style={{
                    fontSize: '14px',
                    color: '#64748b',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    backgroundColor: '#f8fafc',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Company Info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'flex-start',
                  gap: '24px',
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    width: '88px',
                    height: '88px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${exp.logoColor}15 0%, ${exp.logoColor}25 100%)`,
                    border: `2px solid ${exp.logoColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: `0 8px 24px ${exp.logoColor}20`,
                    transition: 'transform 0.3s ease',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'scale(1.05) rotate(-3deg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }
                  }}
                >
                  <img 
                    src={exp.logo} 
                    alt={`${exp.company} logo`} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                    }} 
                  />
                </div>

                {/* Company Details */}
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: exp.logoColor,
                      marginBottom: '14px',
                      marginTop: '4px',
                    }}
                  >
                    {exp.company}
                  </h4>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: 1.8,
                      color: '#475569',
                      margin: 0,
                    }}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkExperience;