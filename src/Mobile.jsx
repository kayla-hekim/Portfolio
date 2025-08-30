import React from "react";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';

import Navbar from "./components/Navbar";



export default function Mobile() {

  return (
    <React.Fragment>
        <Navbar />

        <div style={{paddingTop: "100px"}}>
            <h2 style={{paddingBottom: "15px", margin: 0, fontSize: "20px", fontWeight: "bold", color: "#01B2AB"}}>Hi there! I'm</h2>
            <h1 style={{paddingBottom: "15px", margin: 0, fontSize: "60px", fontWeight: "600", color: "#FFFFFF"}}>Kayla Kim</h1>
            
            <p 
                style={{
                    margin: "30px auto",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    maxWidth: "400px", 
                    fontSize: "16px", 
                    color: "#CCCCCC"
                }}
            >
                3rd year at the University of Virginia double majoring in data science and computer science, aspiring ML Engineer and Software Developer
            </p>

            <div style={{display: "flex", justifyContent: "center", gap: "30px"}}>
                <Button
                    variant="text"
                    disableRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        '&:focus': {
                            outline: 'none',
                            backgroundColor: 'transparent',
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <GitHubIcon sx={{color: "#01B2AB", width: "50px", height: "auto"}}/>
                </Button>
                <Button
                    variant="text"
                    disableRipple
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                        '&:focus': {
                            outline: 'none',
                            backgroundColor: 'transparent',
                        },
                        '&:active': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    <LinkedInIcon sx={{color: "#01B2AB",  width: "50px", height: "50px"}}/>
                </Button>
            </div>
        </div>


        <div>
            <h2 style={{textAlign: "left", marginRight: "20px", marginLeft: "20px"}}>Contact Me:</h2>

            <div style={{margin: '20px', display: "flex", flexDirection: "column", gap: "20px"}}>
                <TextField
                    variant="outlined"
                    placeholder="Name"
                    sx={{
                        width: "100%",
                        minHeight: "30px",
                        height: "100%",
                        borderRadius: "30px",
                        '& .MuiOutlinedInput-root': {
                            padding: '5px',
                            borderRadius: "10px",
                            fontFamily: "'DM Sans', sans-serif !important",
                        '& fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&:hover fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        },
                        '& .MuiOutlinedInput-input': {
                        padding: '3px 14px',
                        height: '1.2em',
                        color: '#FFFFFF',
                        '&::placeholder': {
                            color: '#CCCCCC',
                            opacity: 1,
                            fontFamily: "'DM Sans', sans-serif !important",
                        },
                        },
                    }}
                />

                <TextField
                    variant="outlined"
                    placeholder="Email"
                    sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "30px",
                        '& .MuiOutlinedInput-root': {
                            padding: '5px',
                            borderRadius: "10px",
                            fontFamily: "'DM Sans', sans-serif !important",
                        '& fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&:hover fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '3px 14px',
                            height: '1.2em',
                            color: '#FFFFFF',
                            '&::placeholder': {
                                color: '#CCCCCC',
                                opacity: 1,
                                fontFamily: "'DM Sans', sans-serif !important",
                            },
                        },
                    }}
                />

                <TextField
                    variant="outlined"
                    placeholder="Your Message"
                    multiline
                    rows={5}
                    sx={{
                        width: "100%",
                        borderRadius: "30px",
                        '& .MuiOutlinedInput-root': {
                            padding: '5px',
                            borderRadius: "10px",
                            fontFamily: "'DM Sans', sans-serif !important",
                        '& fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&:hover fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#FFFFFF',
                        },
                        },
                        '& .MuiOutlinedInput-input': {
                        padding: '3px 14px',
                        height: '1.2em',
                        color: '#FFFFFF',
                        '&::placeholder': {
                            color: '#CCCCCC',
                            opacity: 1,
                            fontFamily: "'DM Sans', sans-serif !important",
                        },
                        },
                    }}
                />

                <Button
      variant="contained"
      disableRipple
      sx={{
        boxShadow: "0px 4px 20px 0px #242424",
        backgroundColor: '#01B2AB',
        color: '#242424',
        borderRadius: '38px',
        padding: '10px 30px',
        fontSize: '16px',
        fontWeight: 'normal',
        fontFamily: "'DM Sans', sans-serif",
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#01B2AB',
          boxShadow: 'none',
        },
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
        },
        '&:active': {
          backgroundColor: '#01B2AB',
          boxShadow: 'none',
        },
        '&.Mui-disabled': {
          backgroundColor: '#01B2AB',
          color: '#242424',
          opacity: 0.7,
        }
      }}
    >
      Submit
    </Button>
            </div>
        </div>
    </React.Fragment>
  );
}
