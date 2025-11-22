import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
const navItems = ['Home', 'About', 'Projects', 'Contact'];
import {Logo} from "../index.js";

const Header = () => {
return ( 
<AppBar sx={{ 
    backgroundColor: '#f4f5ff',
    color: '#333',
    px: { xs: 2, sm: 4 },
    py: 2,
    fontFamily: "'Roboto', sans-serif",
    }}>
<Toolbar  sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
{/* Logo */}
<Logo/>
    {/* Menu Items */}
        <List sx={{ display: 'flex', gap: 3 ,}}>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center', fontWeight: 500,  color: '#333' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
  

    {/* Download CV Button */}
    <Button
      variant="contained"
      color="primary"
      href="/path/to/your/cv.pdf"
      target="_blank"
      sx={{ borderRadius: '20px' }}
    >
      Download CV
    </Button>
  </Toolbar>
</AppBar>


);
};

export default Header;
