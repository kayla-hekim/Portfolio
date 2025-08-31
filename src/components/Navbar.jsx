import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function Navbar() {
  const navItems = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <Box 
      sx={{ 
        boxShadow: "0px 4px 20px 0 #242424",
        display: 'flex', 
        justifyContent: 'space-between', 
        maxWidth: "755px",
        margin: '0 auto',
        paddingTop: '30px',
        width: '100%',
        backgroundColor: "#242424",
        position: 'fixed',  
        top: 0, 
        left: 0,
        right: 0,
        zIndex: 1000     
      }}
    >
      {navItems.map((item) => (
        <Button 
          key={item} 
          variant="text" 
          sx={{
            color: '#CCCCCC', 
            fontSize: '13px', 
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
          <a href={`#${item}`} style={{color: "#CCCCCC"}}>
            {item}
          </a>
        </Button>
      ))}
    </Box>
  );
}