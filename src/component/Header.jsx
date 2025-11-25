import React, { useState } from 'react';
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
  Drawer
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from "../index.js";

const navItems = ['Home', 'About', 'Projects', 'Contact'];

const Header = () => {
  const [activeItem, setActiveItem] = useState(navItems[0]); // default active
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle drawer (hamburger)
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  // Drawer for mobile
  const drawer = (
    <Box sx={{ width: 250, textAlign: 'center', mt: 3 }}>
      <Logo />

      <List sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
  {navItems.map((item) => (
    <ListItem key={item} disablePadding>
      <ListItemButton
        onClick={() => {
          scrollToSection(item);
          setActiveItem(item); // set active on click
        }}
        sx={{
          textAlign: "center",
          color: activeItem === item ? "#1976d2" : "#333", // highlight active
          fontWeight: activeItem === item ? "bold" : "normal",
        }}
      >
        <ListItemText primary={item} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      <Button
        variant="contained"
        color="primary"
        href="/nancy_kumari.pdf"
        target="_blank"
        sx={{ borderRadius: "20px", mt: 2 }}
      >
        Download CV
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: '#f4f5ff',
          color: '#333',
          px: { xs: 2, sm: 4 },
          py: 2,
          boxShadow: 1
        }}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {/* Logo */}
          <Logo />

          {/* Desktop menu */}
          <List sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(item)}
                  sx={{ textAlign: "center", color: "#333" }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Desktop CV Button */}
          <Button
            variant="contained"
            color="primary"
            href="../assets/nancy_kumari.pdf"
            target="_blank"
            sx={{ borderRadius: "20px", display: { xs: "none", md: "block" } }}
          >
            Download CV
          </Button>

          {/* Mobile hamburger */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#333" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Fix overlap */}
      <Toolbar />

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
