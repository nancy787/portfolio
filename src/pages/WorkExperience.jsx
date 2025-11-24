import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Founder & CEO',
      period: 'April 2025 - Present',
      company: 'FileFlow Technologies',
      logo: 'FF',
      description: 'Founded and currently leading the development of a cloud-based file management SaaS, focusing on architecture, deployment strategy, and core product innovation.',
      logoColor: '#000000',
    },
    {
      title: 'Backend Developer',
      period: 'May 2025 - July 2025',
      company: 'La Votive Solutions',
      logo: 'LV',
      description: 'Built robust backend systems and APIs powering web platforms, ensuring performance and maintainability using Node.js & Laravel.',
      logoColor: '#6C7EFF',
    },
    {
      title: 'Full-Stack Developer',
      period: 'May 2025 - Present',
      company: 'Tybitx Services Int\'l Ltd',
      logo: 'TX',
      description: 'Contributed to both the company\'s website and backend services, focusing on scalable development and system reliability.',
      logoColor: '#FF6B35',
    },
    {
      title: 'Web Developer',
      period: 'Jan 2025 - May 2025',
      company: 'LifeCard Group (University)',
      logo: 'LC',
      description: 'Contributed to scalable software solutions across frontend and backend, focusing on clean architecture and modular design.',
      logoColor: '#1E3A8A',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#F5F7FA',
        minHeight: '100vh',
        padding: '80px 24px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <span
              style={{
                color: '#5C6BC0',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              ›› RESUME
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3rem)',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '32px',
          }}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '32px',
                border: '1px solid #E5E7EB',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: '#6C7EFF',
                      flexShrink: 0,
                    }}
                  />
                  <h3
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#212121',
                      margin: 0,
                    }}
                  >
                    {exp.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: '14px',
                    color: '#757575',
                    whiteSpace: 'nowrap',
                    marginLeft: '16px',
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Company Info */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                {/* Logo */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    backgroundColor: `${exp.logoColor}15`,
                    border: `2px solid ${exp.logoColor}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '24px',
                    fontWeight: 700,
                    color: exp.logoColor,
                  }}
                >
                  {exp.logo}
                </div>

                {/* Company Details */}
                <div style={{ flex: 1 }}>
                  <h4
                    style={{
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#212121',
                      marginBottom: '12px',
                      marginTop: '4px',
                    }}
                  >
                    {exp.company}
                  </h4>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.7,
                      color: '#616161',
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