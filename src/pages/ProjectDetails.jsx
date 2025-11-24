import React, { useState , useEffect} from 'react';

const ProjectDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectData = {
    title: 'LifeCard University',
    tagline: 'Access to Lifelong Learning',
    subtitle: 'EDUCATION FOR EVERYONE',
    description: 'A comprehensive university management system designed for LifeCard University, offering diverse courses and coaching programs focused on real estate investment, wealth creation, and personal development. The platform empowers learners worldwide with transformative education for career success.',
    date: '2025',
    type: 'Full Stack Application',
    client: 'LifeCard University',
    techStack: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'MySQL', 'cPanel'],
    status: 'hosting',
    demoLink: '#',
    features: [
      'Multi-role authentication system supporting students, instructors, and administrators',
      'Comprehensive course management with video streaming and progress tracking',
      'Real-time dashboard with academic performance analytics and completion metrics',
      'Integrated help center with 24/7 support, FAQs, and live chat functionality',
      'Student appointment scheduling system for personalized counseling sessions',
      'Automated course enrollment and certificate generation upon completion'
    ],
    challenge: 'This project challenged me to build a scalable education platform that handles complex user roles, course management, and student progress tracking. The system features real-time notifications, comprehensive reporting, and a modern interface that enhances the learning experience for thousands of students pursuing financial literacy and real estate investment education.',
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop'
    ]
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"' }}>
{/* Hero Section */}
<div
style={{
background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
padding: isMobile ? '60px 16px 40px' : '120px 24px 80px',
position: 'relative',
overflow: 'hidden',
}}
>
{/* Background Pattern */}
<div
style={{
position: 'absolute',
top: 0,
left: 0,
right: 0,
bottom: 0,
opacity: 0.1,
backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
backgroundSize: '40px 40px',
}}
/>

```
    <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <span
        style={{
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: isMobile ? '12px' : '13px',
          fontWeight: 500,
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
      >
        {projectData.subtitle}
      </span>

      <h1
        style={{
          fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          color: '#ffffff',
          margin: '16px 0',
          letterSpacing: '-1px',
        }}
      >
        {projectData.title}
      </h1>

      <p
        style={{
          fontSize: isMobile ? '16px' : '24px',
          color: 'rgba(255, 255, 255, 0.9)',
          marginBottom: isMobile ? '24px' : '32px',
          fontWeight: 300,
        }}
      >
        {projectData.tagline}
      </p>

      <button
        style={{
          padding: isMobile ? '10px 28px' : '14px 36px',
          borderRadius: '50px',
          border: 'none',
          backgroundColor: '#ffffff',
          color: '#1e3a8a',
          fontSize: '16px',
          fontWeight: 600,
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }}
      >
        View Live Project →
      </button>
    </div>
  </div>

  {/* Main Content */}
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '32px 16px' : '64px 24px' }}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr',
        gap: isMobile ? '32px' : '48px',
      }}
    >
      {/* Left Column */}
      <div>
        {/* Hero Image */}
        <div
          style={{
            backgroundColor: '#e0f2fe',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: isMobile ? '32px' : '48px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src={projectData.images[0]}
            alt="Project Hero"
            style={{
              width: '100%',
              height: isMobile ? '240px' : '480px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Tabs Navigation */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '32px',
            borderBottom: '2px solid #e2e8f0',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
          }}
        >
          {['overview', 'features', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                color: activeTab === tab ? '#3b82f6' : '#64748b',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '3px solid #3b82f6' : '3px solid transparent',
                marginBottom: '-2px',
                textTransform: 'capitalize',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab) e.target.style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab) e.target.style.color = '#64748b';
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '16px' }}>
              Project Overview
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569', marginBottom: '32px' }}>
              {projectData.description}
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#0f172a', marginBottom: '16px', marginTop: '32px' }}>
              The Challenge
            </h3>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569' }}>{projectData.challenge}</p>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '24px' }}>Key Features</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {projectData.features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <span style={{ color: 'white', fontSize: '14px' }}>✓</span>
                  </div>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#475569', margin: 0 }}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#0f172a', marginBottom: '24px' }}>Project Gallery</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '24px',
              }}
            >
              {projectData.images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    style={{
                      width: '100%',
                      height: isMobile ? '200px' : '400px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div>
        <div
          style={{
            backgroundColor: '#3b82f6',
            borderRadius: '16px',
            padding: isMobile ? '24px' : '32px',
            color: 'white',
            position: isMobile ? 'relative' : 'sticky',
            top: isMobile ? '0' : '24px',
          }}
        >
          <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '24px', marginTop: 0 }}>Project Information</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {['Date', 'Type', 'Client'].map((label, i) => (
              <div key={i}>
                <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {label}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>
                  {projectData[label.toLowerCase()]}
                </p>
              </div>
            ))}

            <div>
              <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {projectData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '20px',
                      fontSize: '13px',
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {projectData.status && (
                <p style={{ fontSize: '13px', marginTop: '8px', opacity: 0.9, fontStyle: 'italic' }}>
                  ({projectData.status})
                </p>
              )}
            </div>

            {projectData.demoLink && (
              <div style={{ marginTop: '16px' }}>
                <p style={{ fontSize: '13px', opacity: 0.8, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Demo
                </p>
                <a
                  href={projectData.demoLink}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'white', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}
                >
                  View Live Project →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ProjectDetails;