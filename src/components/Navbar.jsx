import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Navbar() {
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '5px', 
        paddingTop: '30px',
        width: '100%',
        backgroundColor: "#242424",
        position: 'fixed',  
        top: 0, 
        left: 0,
        zIndex: 1000     
      }}
    >
      {navItems.map((item) => (
        <Button 
          key={item} 
          variant="text" 
          sx={{
            color: '#CCCCCC', 
            fontSize: '12px', 
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 'normal',
            '&:hover': {
            backgroundColor: 'transparent',
            },
            '&:focus': {
            outline: 'none', 
            },
            '&:active': {
            outline: 'none',
            },
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
}