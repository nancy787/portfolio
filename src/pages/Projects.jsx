import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

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
title: 'LifeCard University Portal',
subtitle: 'Full Stack Application',
image: '[https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop](https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop)',
gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
bgColor: '#e0f2fe',
},
{
title: 'Tybitx Services Website',
subtitle: 'Website',
image: '[https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop)',
gradient: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)',
bgColor: '#ffedd5',
},
{
title: 'UNILAG DLI Support System',
subtitle: 'Full Stack Application',
image: '[https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop](https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop)',
gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
bgColor: '#ede9fe',
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
  ›› MY PORTFOLIO </span> </div>
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
          <Link key={index} to="/project-details" style={{ textDecoration: 'none' }}>
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
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      padding: isMobile ? '16px 20px' : '24px 32px',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      textAlign: 'center',
                      transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <div style={{ fontSize: isMobile ? '32px' : '48px', marginBottom: '12px' }}>💻</div>
                    <h3
                      style={{
                        fontSize: isMobile ? '20px' : '28px',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: '0 0 8px 0',
                        textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      {project.title.split(' ').slice(0, 2).join(' ')}
                    </h3>
                    <p
                      style={{
                        fontSize: isMobile ? '14px' : '16px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      View Project →
                    </p>
                  </div>
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

      {/* View All Button */}
      <div style={{ textAlign: 'center', marginTop: isMobile ? '48px' : '64px' }}>
        <button
          style={{
            padding: isMobile ? '12px 32px' : '16px 48px',
            borderRadius: '50px',
            border: '2px solid #6C7EFF',
            backgroundColor: 'transparent',
            color: '#6C7EFF',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#6C7EFF';
            e.target.style.color = '#ffffff';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(108, 126, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#6C7EFF';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          View All Projects
        </button>
      </div>
    </div>
  </div>
  );
};

export default Projects;
