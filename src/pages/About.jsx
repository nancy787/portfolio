import React, { useState, useEffect } from 'react';

// Material-UI Icons as SVG components
const CodeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 8L6 12L10 16M14 8L18 12L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"/>
    <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor"/>
    <circle cx="12" cy="7" r="1.5" fill="currentColor"/>
  </svg>
);

const WebIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const StorageIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M5 12C3.34315 12 2 10.6569 2 9V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V9C22 10.6569 20.6569 12 19 12M5 12V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="7" cy="7.5" r="1" fill="currentColor"/>
    <circle cx="7" cy="16.5" r="1" fill="currentColor"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 17V13M7 13H9C9.55228 13 10 12.5523 10 12V11C10 10.4477 9.55228 10 9 10H7V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 10V15.5C14 16.3284 14.6716 17 15.5 17C16.3284 17 17 16.3284 17 15.5V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const PhpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="10" ry="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 12H7.5C8.32843 12 9 11.3284 9 10.5C9 9.67157 8.32843 9 7.5 9H6V15M12 9V15M12 12H14M17 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LaravelIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L4 6V12C4 16.5 7 20.5 12 22C17 20.5 20 16.5 20 12V6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8L8 10L12 12L16 10L12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloudIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.3364 3.51655 10.5151 5.54303 10.1157C6.04622 6.58066 9.09689 4 12.75 4C16.4031 4 19.4538 6.58066 19.957 10.1157C21.9835 10.5151 23.5 12.3364 23.5 14.5C23.5 16.9853 21.4853 19 19 19H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BootstrapIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 8H12.5C13.8807 8 15 9.11929 15 10.5C15 11.8807 13.8807 13 12.5 13H8V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M8 13H13C14.3807 13 15.5 14.1193 15.5 15.5C15.5 16.8807 14.3807 18 13 18H8V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

const HtmlIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M4 3L5 19L12 21L19 19L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7H17L16.5 11H9.5L9.8 14H16.3L16 17L12 18L8 17L7.8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CssIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path d="M4 3L5 19L12 21L19 19L20 3H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 7H17L16 12H8L8.5 15.5L12 17L15.5 15.5L16 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // New State for Mobile View (e.g., screen width <= 600px)
  const [isMobile, setIsMobile] = useState(false); 

  const skills = [
    {
      title: 'JavaScript',
      description: 'Building dynamic and interactive web applications with modern ES6+ features and frameworks.',
      percentage: 90,
      icon: <JavaScriptIcon />,
      color: '#FDD835',
    },
    {
      title: 'NodeJS',
      description: 'Developing server-side applications, APIs, and real-time systems with Express framework.',
      percentage: 85,
      icon: <CodeIcon />,
      color: '#68A063',
    },
    {
      title: 'ReactJS',
      description: 'Creating dynamic user interfaces with hooks, context API, and component architecture.',
      percentage: 80,
      icon: <WebIcon />,
      color: '#61DAFB',
    },
    {
      title: 'PHP',
      description: 'Building robust server-side web applications with dynamic content and database integration.',
      percentage: 85,
      icon: <PhpIcon />,
      color: '#777BB4',
    },
    {
      title: 'Laravel',
      description: 'Developing elegant web applications using PHP framework with MVC architecture and Eloquent ORM.',
      percentage: 95,
      icon: <LaravelIcon />,
      color: '#FF2D20',
    },
    {
      title: 'MongoDB',
      description: 'Designing NoSQL database solutions with efficient queries and data modeling techniques.',
      percentage: 80,
      icon: <StorageIcon />,
      color: '#47A248',
    },
    {
      title: 'MySQL',
      description: 'Building robust relational database systems with complex queries and optimized schema design.',
      percentage: 92,
      icon: <DatabaseIcon />,
      color: '#4479A1',
    },
    {
      title: 'PostgreSQL',
      description: 'Implementing advanced relational database features with powerful SQL capabilities and data integrity.',
      percentage: 78,
      icon: <DatabaseIcon />,
      color: '#336791',
    },
    {
      title: 'Cloud',
      description: 'Deploying and managing scalable applications on AWS, Azure, and Google Cloud platforms.',
      percentage: 75,
      icon: <CloudIcon />,
      color: '#4285F4',
    },
    {
      title: 'Tailwind CSS',
      description: 'Designing highly customizable and responsive UIs using utility-first CSS framework.',
      percentage: 88,
      icon: <PaletteIcon />, // make sure you import or create this icon
      color: '#06B6D4',
    },
    {
      title: 'Bootstrap',
      description: 'Rapidly building responsive and mobile-first websites with popular CSS framework.',
      percentage: 92,
      icon: <BootstrapIcon />,
      color: '#7952B3',
    },
    {
      title: 'HTML',
      description: 'Crafting semantic and accessible web structure with modern HTML5 standards and best practices.',
      percentage: 95,
      icon: <HtmlIcon />,
      color: '#E34F26',
    },
    {
      title: 'CSS',
      description: 'Styling beautiful and responsive layouts with modern CSS3, animations, and Grid/Flexbox.',
      percentage: 93,
      icon: <CssIcon />,
      color: '#1572B6',
    },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, skills.length - itemsPerView);
  const mobileBreakpoint = 768; // Define a breakpoint for mobile/tablet view

  // Effect to handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Carousel autoplay effect (only runs if not mobile)
  useEffect(() => {
    if (isMobile || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, isMobile]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Determine which skills to display based on view type
  const skillsToDisplay = isMobile ? skills : skills.slice(0); // On mobile, show all, otherwise show all for carousel track

  // Card list style change for mobile
  const cardListStyle = isMobile
    ? {
        display: 'grid', // Use grid for simple stacking
        gridTemplateColumns: '1fr', // Single column
        gap: '24px',
        padding: '8px 0',
      }
    : {
        display: 'flex',
        gap: '24px',
        transform: `translateX(-${currentIndex * (100 / itemsPerView + 2)}%)`,
        transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: '8px 0',
      };

  // Card style change for mobile
  const cardStyle = (index) => ({
    // Base styles
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '32px 24px',
    boxShadow:
      hoveredIndex === index
        ? '0 8px 16px rgba(0,0,0,0.15)'
        : '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    // View-specific styles
    minWidth: isMobile ? 'auto' : `calc(${100 / itemsPerView}% - 18px)`,
    width: isMobile ? '100%' : `calc(${100 / itemsPerView}% - 18px)`,
  });

  return (
    <div id="about"
      style={{
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        padding: '80px 24px',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          {/* Overline and Main Heading are the same... */}
          {/* ... (Header code remains unchanged) ... */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#5C6BC0',
              }}
            />
            <span
              style={{
                color: '#5C6BC0',
                fontSize: '25px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
              }}
            >
              About Me
            </span>
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#5C6BC0',
              }}
            />
          </div>

          {/* Main Heading */}
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 300,
              color: '#212121',
              marginBottom: '24px',
              letterSpacing: '-0.5px',
            }}
          >
            My Soft <span style={{ fontWeight: 700 }}>Skills</span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: '#616161',
              fontSize: '18px',
              lineHeight: 1.75,
              maxWidth: '900px',
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            Hello there, I'm Nancy! I love building software that makes a difference. 
            As a Backend Engineer and Software Developer, I enjoy solving challenging problems, 
            creating reliable APIs, and working with databases and scalable systems. 
            I thrive on opportunities that push me to think creatively and improve my skills. 
            Beyond coding, I value teamwork, clear communication, 
            and continuously learning new technologies. My goal is to write clean,
            efficient code that delivers real impact.
          </p>
        </div>

        {/* Carousel Container */}
        <div style={{ position: 'relative' }}>
          {/* Navigation Buttons (Conditional Rendering) */}
          {!isMobile && (
            <>
              <button
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5C6BC0';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <button
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5C6BC0';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </>
          )}

          {/* Carousel Track / Card Stack */}
          <div style={{ overflow: isMobile ? 'visible' : 'hidden' }}>
            <div style={cardListStyle}>
              {skillsToDisplay.map((skill, index) => (
                <div
                  key={index}
                  style={cardStyle(index)}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    if (!isMobile) setIsAutoPlaying(false);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    if (!isMobile) setIsAutoPlaying(true);
                  }}
                >
                  {/* Top colored border */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      backgroundColor: skill.color,
                      transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                    }}
                  />

                  {/* Icon Container */}
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: `${skill.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      color: skill.color,
                      transition: 'all 0.3s ease',
                      transform: hoveredIndex === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                    }}
                  >
                    {skill.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 500,
                      color: '#212121',
                      marginBottom: '12px',
                      letterSpacing: '0.25px',
                    }}
                  >
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: '#757575',
                      fontSize: '14px',
                      lineHeight: 1.6,
                      marginBottom: '24px',
                      minHeight: '72px',
                    }}
                  >
                    {skill.description}
                  </p>

                  {/* Progress Section */}
                  <div>
                    {/* Progress Label */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '8px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#757575',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                        }}
                      >
                        Proficiency
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: skill.color,
                        }}
                      >
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#e0e0e0',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.percentage}%`,
                          height: '100%',
                          backgroundColor: skill.color,
                          borderRadius: '4px',
                          transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s',
                          boxShadow: `0 0 8px ${skill.color}80`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators (Conditional Rendering) */}
          {!isMobile && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '32px',
              }}
            >
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  style={{
                    width: currentIndex === index ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentIndex === index ? '#5C6BC0' : '#e0e0e0',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;