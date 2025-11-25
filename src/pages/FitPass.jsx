import React, { useState, useEffect } from 'react';
import EventImg from "../assets/events.png";
import TicketImg from "../assets/tickets.png";

const FitPass = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectData = {
    title: 'FitPass',
    tagline: 'Your Gateway to Fitness Events',
    subtitle: 'HYBRID TICKETS APP',
    description: 'FitPass is a dedicated platform for buying and selling tickets to fitness races worldwide. Users can browse for tickets, list their own tickets for sale, and create a Wishlist to receive notifications when tickets matching their preferences are added. The platform ensures all tickets are verified before being approved for sale, providing a secure and seamless ticketing experience. Payments are handled via Stripe, supporting both buyers and sellers efficiently.',
    date: '2025',
    type: 'Backend Development',
    client: 'FitPass',
    techStack: ['Laravel', 'MySQL', 'JavaScript', 'AJAX', 'jQuery', 'REST APIs', 'Firebase', 'Stripe API'],
    status: 'Live',
    demoLink: 'https://ticket-backend-vohe.onrender.com',
    gitLink: 'https://github.com/nancy787/ticket-backend',
    features: [
      {
        icon: '🎟️',
        title: 'Global Ticket Marketplace',
        desc: 'Browse, buy, and sell tickets for fitness events worldwide'
      },
      {
        icon: '🔔',
        title: 'Smart Wishlist',
        desc: 'Get notifications when preferred tickets become available'
      },
      {
        icon: '✅',
        title: 'Verified Tickets',
        desc: 'All listings verified to ensure authenticity and security'
      },
      {
        icon: '💳',
        title: 'Secure Payments',
        desc: 'Stripe-powered checkout for buyers and sellers'
      },
      {
        icon: '🔒',
        title: 'Ticket Locking',
        desc: 'Prevents multiple users from purchasing the same ticket'
      },
      {
        icon: '🔍',
        title: 'Smart Discovery',
        desc: 'Search and filter by location, date, and event type'
      }
    ],
    challenge: 'The biggest challenge was implementing a ticket locking system to prevent multiple users from purchasing the same ticket simultaneously. We also integrated Stripe Connect to handle payments securely for both buyers and sellers, ensuring a smooth financial flow and real-time notifications for ticket availability and purchase confirmations.',
    images: [
      EventImg, TicketImg
    ]
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          padding: isMobile ? '60px 20px 40px' : '100px 40px 60px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, white 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 80px 80px, 100px 100px',
          }}
        />

        {/* Decorative Circles */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 70%)',
            top: '-200px',
            right: '-100px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,193,7,0.1) 0%, transparent 70%)',
            bottom: '-150px',
            left: '-50px',
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              borderRadius: '30px',
              marginBottom: '20px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 193, 7, 0.4)',
            }}
          >
            <span
              style={{
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              {projectData.subtitle}
            </span>
          </div>

          <h1
            style={{
              fontSize: isMobile ? '2.5rem' : 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 800,
              color: '#ffffff',
              margin: '0 0 20px 0',
              letterSpacing: '-2px',
              lineHeight: 1.1,
            }}
          >
            {projectData.title}
          </h1>

          <p
            style={{
              fontSize: isMobile ? '18px' : '24px',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '32px',
              fontWeight: 400,
              maxWidth: '700px',
            }}
          >
            {projectData.tagline}
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={projectData.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: isMobile ? '12px 28px' : '16px 36px',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: '#ffc107',
                color: '#1a1a1a',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255, 193, 7, 0.4)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 193, 7, 0.6)';
                e.currentTarget.style.backgroundColor = '#ffcd38';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 193, 7, 0.4)';
                e.currentTarget.style.backgroundColor = '#ffc107';
              }}
            >
              View Live Platform
              <span style={{ fontSize: '18px' }}>→</span>
            </a>

            <a
              href={projectData.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: isMobile ? '12px 28px' : '16px 36px',
                borderRadius: '12px',
                border: '2px solid rgba(255,255,255,0.4)',
                backgroundColor: 'transparent',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
              }}
            >
              View Code
              <span style={{ fontSize: '18px' }}>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '40px 20px' : '80px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 380px',
            gap: isMobile ? '40px' : '60px',
          }}
        >
          {/* Left Column */}
          <div>
            {/* Featured Image */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                overflow: 'hidden',
                marginBottom: isMobile ? '40px' : '60px',
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.15)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
              }}
            >
              <img
                src={projectData.images[0]}
                alt="FitPass Platform"
                style={{
                  width: '100%',
                  height: isMobile ? '280px' : '500px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Tabs Navigation */}
            <div
              style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '32px',
                backgroundColor: '#e0e7ff',
                padding: '6px',
                borderRadius: '12px',
                flexWrap: isMobile ? 'wrap' : 'nowrap',
              }}
            >
              {['overview', 'features', 'gallery'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    border: 'none',
                    backgroundColor: activeTab === tab ? '#ffffff' : 'transparent',
                    color: activeTab === tab ? '#3b82f6' : '#64748b',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    transition: 'all 0.3s ease',
                    boxShadow: activeTab === tab ? '0 2px 8px rgba(59, 130, 246, 0.15)' : 'none',
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
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: isMobile ? '32px 24px' : '48px 40px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.05)',
              }}
            >
              {activeTab === 'overview' && (
                <div>
                  <h2
                    style={{
                      fontSize: isMobile ? '26px' : '32px',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '24px',
                      marginTop: 0,
                    }}
                  >
                    Project Overview
                  </h2>
                  <p
                    style={{
                      fontSize: '17px',
                      lineHeight: 1.8,
                      color: '#475569',
                      marginBottom: '32px',
                    }}
                  >
                    {projectData.description}
                  </p>

                  <div
                    style={{
                      backgroundColor: '#eff6ff',
                      border: '2px solid #3b82f6',
                      borderLeft: '6px solid #3b82f6',
                      borderRadius: '12px',
                      padding: '24px',
                      marginTop: '32px',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#3b82f6',
                        marginBottom: '12px',
                        marginTop: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '24px' }}>⚡</span>
                      Technical Challenge
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569', margin: 0 }}>
                      {projectData.challenge}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  <h2
                    style={{
                      fontSize: isMobile ? '26px' : '32px',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '32px',
                      marginTop: 0,
                    }}
                  >
                    Key Features
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                      gap: '20px',
                    }}
                  >
                    {projectData.features.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          padding: '24px',
                          backgroundColor: '#fafafa',
                          borderRadius: '16px',
                          border: '1px solid #e2e8f0',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px)';
                          e.currentTarget.style.boxShadow = '0 8px 20px rgba(59, 130, 246, 0.15)';
                          e.currentTarget.style.borderColor = '#3b82f6';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                      >
                        <div style={{ fontSize: '32px', marginBottom: '12px' }}>{feature.icon}</div>
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#1e293b',
                            margin: '0 0 8px 0',
                          }}
                        >
                          {feature.title}
                        </h3>
                        <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h2
                    style={{
                      fontSize: isMobile ? '26px' : '32px',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '32px',
                      marginTop: 0,
                    }}
                  >
                    Project Gallery
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                      gap: '20px',
                    }}
                  >
                    {projectData.images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        style={{
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          border: '1px solid rgba(59, 130, 246, 0.1)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.03)';
                          e.currentTarget.style.boxShadow = '0 12px 30px rgba(59, 130, 246, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                        }}
                      >
                        <img
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          style={{
                            width: '100%',
                            height: isMobile ? '200px' : '250px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div>
            <div
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '20px',
                padding: isMobile ? '32px 24px' : '40px 32px',
                color: 'white',
                position: isMobile ? 'relative' : 'sticky',
                top: isMobile ? '0' : '24px',
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  marginBottom: '32px',
                  marginTop: 0,
                }}
              >
                Project Details
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { label: 'Date', value: projectData.date },
                  { label: 'Type', value: projectData.type },
                  { label: 'Client', value: projectData.client },
                ].map((item, i) => (
                  <div key={i}>
                    <p
                      style={{
                        fontSize: '12px',
                        opacity: 0.85,
                        marginBottom: '10px',
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                ))}

                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      opacity: 0.85,
                      marginBottom: '14px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      fontWeight: 600,
                    }}
                  >
                    Tech Stack
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {projectData.techStack.map((tech, index) => (
                      <span
                        key={index}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: 'rgba(255, 255, 255, 0.25)',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: 600,
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p
                    style={{
                      fontSize: '12px',
                      opacity: 0.85,
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      fontWeight: 600,
                    }}
                  >
                    Status
                  </p>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      backgroundColor: 'rgba(34, 197, 94, 0.25)',
                      borderRadius: '8px',
                      border: '1px solid rgba(34, 197, 94, 0.4)',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: '#22c55e',
                        animation: 'pulse 2s ease-in-out infinite',
                      }}
                    />
                    <span style={{ fontSize: '15px', fontWeight: 600 }}>{projectData.status}</span>
                  </div>
                </div>

                <div
                  style={{
                    height: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)',
                    margin: '8px 0',
                  }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <a
                    href={projectData.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>View Live Platform</span>
                    <span style={{ fontSize: '20px' }}>→</span>
                  </a>

                  <a
                    href={projectData.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '12px',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>View on GitHub</span>
                    <span style={{ fontSize: '20px' }}>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px',
            cursor: 'pointer',
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged view"
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: '12px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          />
        </div>
      )}

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

export default FitPass;