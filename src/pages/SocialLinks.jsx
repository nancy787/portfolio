import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function SocialLinks() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

    const socialLinks = [
  {
    icon: <LinkedInIcon style={{ fontSize: '1.8rem' }} />,
    url: "https://www.linkedin.com/in/nancy-kumari-bb9722204/",
  },
  {
    icon: <GitHubIcon style={{ fontSize: '1.8rem' }} />,
    url: "https://github.com/nancy787",
  },
  {
    icon: <MailOutlineIcon style={{ fontSize: '1.8rem' }} />,
    url: "mailto:nancykumari2630@gmail.com",
  },
        ];
    return(
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
  {socialLinks.map((item, index) => (
    <a
      key={index}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <button
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
        {item.icon}
      </button>
    </a>
  ))}
</div> 
    )
}



