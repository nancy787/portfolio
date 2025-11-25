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
        backgroundColor: '#F5F7FA',
        minHeight: '100vh',
        padding: isMobile ? '40px 16px' : '80px 24px',
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span
              style={{
                color: '#5C6BC0',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              ›› WORK EXPERIENCS
            </span>
          </div>
          <h2
            style={{
              fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3rem)',
              fontWeight: 700,
              color: '#212121',
              margin: 0,
              letterSpacing: '-0.5px',
            }}
          >
            My Work Experience
          </h2>
        </div>

        {/* Experience Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: isMobile ? '24px' : '32px',
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: isMobile ? '28px' : '36px',
                border: '1px solid #E5E7EB',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = `${exp.logoColor}40`;
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }
              }}
            >
              {/* Accent Bar */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  backgroundColor: exp.logoColor,
                }}
              />

              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'space-between',
                  alignItems: isMobile ? 'flex-start' : 'center',
                  marginBottom: isMobile ? '24px' : '28px',
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontSize: '23px',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    margin: 0,
                    letterSpacing: '-0.3px',
                  }}
                >
                  {exp.title}
                </h3>
                <span
                  style={{
                    fontSize: '14px',
                    color: '#64748B',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                    backgroundColor: '#F8FAFC',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid #E2E8F0',
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
                    borderRadius: '12px',
                    backgroundColor: `${exp.logoColor}10`,
                    border: `2px solid ${exp.logoColor}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '36px',
                    boxShadow: `0 4px 12px ${exp.logoColor}15`,
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                    }
                  }}
                >
                  <img src={exp.logo} alt="logo" style={{ width: '100%', height: '100%' }} />

                </div>

                {/* Company Details */}
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: '21px',
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
                      fontSize: '15px',
                      lineHeight: 1.8,
                      color: '#4B5563',
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
    </div>
  );
};

export default WorkExperience;