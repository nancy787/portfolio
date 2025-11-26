import { Box, Typography, Link } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  
    return (
     <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#f4f5ff',
          py: 5,
          // Remove px here or set to 0
          px: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // center content vertically if needed
          flexWrap: 'wrap',
          zIndex: 1000,
        }}
      >
      <Box sx={{ mb: 2 }}>
      </Box>
        {/* Navigation Links */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mb: 2 }}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <Link 
             key={item} 
            onClick={() => scrollToSection(item)}
            sx={{ 
              mx: 2, 
              my: 0.5, 
              color: '#333', 
              textDecoration: 'none', 
              fontWeight: 500,
              cursor: 'pointer',
              '&:hover': {
                color: '#1976d2',
              }
            }}
            >
              {item}
            </Link>
          ))}
        </Box>

        {/* Copyright */}
        <Typography variant="body2" sx={{ color: '#666' }}>
          © 2025 Nancy. Designed by <Link href="https://www.linkedin.com/in/nancy-kumari-bb9722204/" sx={{ color: '#1976d2', textDecoration: 'none' }}>Nancy</Link>
        </Typography>
      </Box>
    );
};

export default Footer;
