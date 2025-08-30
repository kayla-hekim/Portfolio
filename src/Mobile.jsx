import React from "react";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Mobile() {

  return (
    <>
        <div>
            <h2 style={{paddingBottom: "15px", margin: 0, fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: "bold", color: "#01B2AB"}}>Hi There! I'm</h2>
            <h1 style={{paddingBottom: "15px", margin: 0, fontFamily: "'DM Sans', sans-serif", fontSize: "60px", fontWeight: "600", color: "#FFFFFF"}}>Kayla Kim</h1>
            
            <p style={{maxWidth: "450px", fontSize: "16px", color: "#CCCCCC"}}>3rd year at the University of Virginia double majoring in data science and computer science, aspiring ML Engineer and Software Developer</p>

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
    </>
  );
}
