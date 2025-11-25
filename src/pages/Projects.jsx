import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import FitpassLoginImg from "../assets/fitpass-login.png";
import simplevedaImg from "../assets/simpleveda.jpeg";
import portfolioImg from "../assets/my-portfolio.png";

const Projects = () => {
const [hoveredProject, setHoveredProject] = useState(null);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
const handleResize = () => setIsMobile(window.innerWidth <= 768);
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);

  const projects = [
  {
  title: 'FitPass',
  subtitle: 'Backend',
  image: FitpassLoginImg,
  bgColor : '#e0f2fe',
  link :'FitPass'
  },
  {
  title: 'SimpleVedas',
  subtitle: 'Full Stack Application',
  image: simplevedaImg,
  bgColor: '#ffedd5',
  link  : 'Simple-vedas'
  },
  {
  title: 'Portfolio',
  subtitle: 'Showcasing My Work, Skills & Growth',
  image: portfolioImg,
  bgColor: '#ede9fe',
  link  : 'portfolio'
  },

  ];

  return (
  <div
  id="projects"
  style={{
  backgroundColor: '#f8fafc',
  minHeight: '100vh',
  padding: isMobile ? '40px 16px' : '80px 24px',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  }}
  >
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
  {/* Header */}
  <div style={{ textAlign: 'center', marginBottom: isMobile ? '48px' : '64px' }}>
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
  <span
  style={{
  color: '#6C7EFF',
  fontSize: '14px',
  fontWeight: 600,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  }}
  >
  ›› MY PROJECTS </span> </div>
  <h2
  style={{
  fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
  fontWeight: 700,
  color: '#0f172a',
  margin: 0,
  letterSpacing: '-1px',
  }}
  >
  Featured Projects </h2> </div>
      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: isMobile ? '24px' : '32px',
        }}
      >
        {projects.map((project, index) => (
          <Link key={index} to={`/${project.link}`} style={{ textDecoration: 'none' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow:
                  hoveredProject === index
                    ? '0 20px 40px rgba(0,0,0,0.15)'
                    : '0 4px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                transform: hoveredProject === index ? 'translateY(-12px)' : 'translateY(0)',
              }}
              onMouseEnter={() => !isMobile && setHoveredProject(index)}
              onMouseLeave={() => !isMobile && setHoveredProject(null)}
            >
              {/* Image Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: isMobile ? '200px' : '320px',
                  overflow: 'hidden',
                  background: project.gradient,
                }}
              >
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: project.gradient,
                    opacity: 0.9,
                    zIndex: 1,
                  }}
                />

                {/* Background Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.4s ease',
                    transform: hoveredProject === index ? 'scale(1.1)' : 'scale(1)',
                  }}
                />

                {/* Content Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                  }}
                >
  
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: isMobile ? '20px 24px' : '28px 32px',
                  backgroundColor: project.bgColor,
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#0f172a',
                    marginBottom: '8px',
                    marginTop: 0,
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#64748b',
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Projects;
