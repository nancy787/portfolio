import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Drawer,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import MyCV from "../assets/nancy_kumari_backend_engineer.pdf";
import {Logo} from '../index'
import { useNavigate, useLocation } from 'react-router-dom';




const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(navItems[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Navigate to home page first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveItem(sectionId);
    setMobileOpen(false);
  };


  // Mobile drawer content
  const drawer = (
    <Box
      sx={{
        width: 280,
        height: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Logo />
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#333' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ flex: 1, pt: 3 }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(item)}
              sx={{
                py: 2,
                px: 3,
                borderLeft: activeItem === item ? '4px solid #1976d2' : '4px solid transparent',
                backgroundColor: activeItem === item ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.12)'
                }
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontWeight: activeItem === item ? 600 : 400,
                  color: activeItem === item ? '#1976d2' : '#333'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Drawer Footer with CV Button */}
      <Box sx={{ p: 3, borderTop: '1px solid #e0e0e0' }}>
        <Button
          variant="contained"
          color="primary"
          href={MyCV}
          target="_blank"
          startIcon={<DownloadIcon />}
          fullWidth
          sx={{
            borderRadius: '25px',
            py: 1.5,
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 600,
            boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        elevation={scrolled ? 4 : 1}
        sx={{
          backgroundColor: scrolled ? '#fff' : '#f4f5ff',
          color: '#333',
          transition: 'all 0.3s ease-in-out',
          py: scrolled ? 1 : 2
        }}
        position="fixed"
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            maxWidth: '1400px',
            width: '100%',
            mx: 'auto'
          }}
        >
          {/* Logo */}
          <Box sx={{ cursor: 'pointer' }} onClick={() => scrollToSection('Home')}>
            <Logo />
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center'
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollToSection(item)}
                sx={{
                  color: activeItem === item ? '#1976d2' : '#333',
                  fontWeight: activeItem === item ? 600 : 400,
                  textTransform: 'none',
                  fontSize: '1rem',
                  px: 2,
                  py: 1,
                  borderRadius: '20px',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.08)'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: activeItem === item ? '60%' : '0%',
                    height: '2px',
                    backgroundColor: '#1976d2',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Desktop CV Button */}
          <Button
            variant="contained"
            color="primary"
            href={MyCV}
            target="_blank"
            startIcon={<DownloadIcon />}
            sx={{
              display: { xs: 'none', md: 'flex' },
              borderRadius: '25px',
              px: 3,
              py: 1,
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
                transform: 'translateY(-2px)',
                transition: 'all 0.2s ease'
              }
            }}
          >
            Download CV
          </Button>

          {/* Mobile Hamburger */}
          <IconButton
            sx={{
              display: { xs: 'flex', md: 'none' },
              color: '#333',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)'
              }
            }}
            onClick={handleDrawerToggle}
            aria-label="menu"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacing to prevent content overlap */}
      <Toolbar sx={{ mb: 2 }} />

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box'
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;