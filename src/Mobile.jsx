import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import { useForm } from '@formspree/react';

import Navbar from "./components/Navbar";
import pfp from "../public/pfp.png";
import gtg from "../public/get-to-gather.png";
import diySpotify from "../public/diy-spotify.png";
import courseReviewApp from "../public/course-review-app.png";


const fetchProjects = async () => {
    return [
        {
            id: 1,
            name: "DIY Spotify",
            tools: [
                "Python", 
                "Chalice Framework", 
                "AWS Services", 
                "SQL"
            ],
            description: "allows users to upload, play, and view songs of their choice.",
            image: diySpotify
        },
        {
            id: 2,
            name: "Get-To-Gather",
            tools: [
                "JavaScript xml",
                "Python", 
                "PostgreSQL",
                "SQLAlchemy"
            ],
            description: "presents easy scheduling as a form of social media, where users can friend other accounts, send personal calendars, and schedule group events.",
            image: gtg
        },
        {
            id: 3,
            name: "Course Review Site",
            tools: [
                "Java",
                "JavaFX",
                "SQLite",
                "JUnit testing"
            ],
            description: "is a GUI where students can rate and write reviews about specific courses.",
            image: courseReviewApp
        },
    ];
}


export default function Mobile() {
    // const navigate = useNavigate();

    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);
    if (state.succeeded) {
        return <p>Thanks for your message! I'll be in touch soon.</p>;
    }

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
            try {
                const projects = await fetchProjects();
                setProjects(projects);
            } catch (err) {
                // enter how you'd handle error
            } finally {
                //what comes after you load? put it here
            }
        };

        getProjects();
    }, []);


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
                    <a href="https://github.com/kayla-hekim" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{color: "#01B2AB", width: "50px", height: "auto"}}/>
                    </a>
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
                    <a href="https://linkedin.com/in/kayla-h-kim" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{color: "#01B2AB",  width: "50px", height: "auto"}}/>
                    </a>
                </Button>
            </div>
        </div>

        <div style={{paddingBottom: "50px", maxWidth: "750px", backgroundColor: "#01B2AB", borderTopLeftRadius: "200px", borderTopRightRadius: "200px", borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px", boxShadow: "0 4px 20px 0 #000000"}}>
            <div id="About">
                <img  style={{width: "300px", height: "auto", maxWidth: "300px", marginTop: "30px"}} src={pfp} alt="profile photo" />
            </div>

            <div style={{backgroundColor: "#01B2AB"}}>
                <div>
                    <h2 style={{color: "#242424", textAlign: "left", margin: 0, marginRight: "20px", marginLeft: "20px"}}>About</h2>
                    
                    <p style={{color: "#242424", textAlign: "left" , marginRight: "20px", marginLeft: "20px"}}>
                        My passion for programming began in fifth grade when I attended a camp to code Minecraft mods. Since then, this passion has extended from sandbox video games to developing apps and building ML models with various languages, including Python, Java, JS and more.
                        <br /><br />I recommend checking out my <b>Projects</b> and <b>Experience</b> below!
                    </p>
                </div>

                <div style={{marginTop: "35px", marginLeft: "20px", marginRight: "20px"}}>
                    <hr style={{border: "none", borderBottom: "1px solid #242424", opacity: "25%"}} />
                </div>

                <div id="Projects" style={{marginTop: "35px"}}>
                    <h2 style={{color: "#242424", textAlign: "left", margin: 0, marginRight: "20px", marginLeft: "20px", marginBottom: "15px"}}>Projects</h2>

                    {projects.map(project => (
                    <div style={{marginLeft: "20px", marginRight: "20px"}} key={project.id}>
                        <h3 style={{margin: 0, fontSize: "20px", color: "#242424", textAlign: "left"}}>{project.name}</h3>
                        <div style={{textAlign: "left"}}>
                            {project.tools.map((tool, index) => (
                                <span style={{fontSize: "15px", fontWeight: "bold", color: "#FFFFFF",}} key={index}>
                                    {tool}
                                    {index < project.tools.length - 1 && ", "}
                                </span>
                            ))}
                        </div>

                        <img src={project.image} style={{marginTop: "10px", width: "100%", height: "auto", borderRadius: "10px", boxShadow: "0 4px 20px 0 #3d3d3d"}} alt="" />

                        <p style={{color: "#242424", textAlign: "left", fontSize: "20px", lineHeight: "23px"}}>{project.description}</p>
                    </div>
                ))}
                </div>
            </div>

            <div style={{marginTop: "35px", marginLeft: "20px", marginRight: "20px"}}>
                    <hr style={{border: "none", borderBottom: "1px solid #242424", opacity: "25%"}} />
                </div>

            <div style={{marginTop: "35px"}} id="Experience">
                <h2 style={{color: "#242424", textAlign: "left", margin: 0, marginRight: "20px", marginLeft: "20px", marginBottom: "15px"}}>Experience</h2>

                <div style={{marginLeft: "20px", marginRight: "20px"}}>
                    <p style={{ color: "#242424", textAlign: "left", fonSize: "20px", margin: 0}}><b style={{fontSize: "20px"}}>PwC</b> <span> - incoming summer 2026 Cloud, Data Analytics, and AI Consulting intern</span></p>

                    {/* <div style={{height: "30px", border: "none", borderLeft: "2px solid #000000", padding: 0, margin: 0, marginLeft: "20px"}}></div> */}

                    <p style={{fonSize: "20px", color: "#242424", textAlign: "left", marginBottom: "5px"}}>
                        <span style={{padding: 0, margin: 0, fontSize: "20px"}}><b>UVA CS Department</b> - Head TA for:<br /></span>
                    </p>
                    <ul style={{padding: 0, margin: 0, paddingLeft: "20px", lineHeight: "20px"}}>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>CS 1112: Intro to Programming</li>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>CS 2130: Computer Systems and Organizations</li>
                    </ul>

                    {/* <div style={{height: "30px", border: "none", borderLeft: "2px solid #000000", padding: 0, margin: 0, marginLeft: "20px", marginTop: "10px"}}></div> */}

                    <p style={{fonSize: "20px", color: "#242424", textAlign: "left", marginBottom: "5px"}}>
                        <span style={{padding: 0, margin: 0, fontSize: "20px"}}><b>El Locale</b> - ex-intern:<br /></span>
                    </p>
                    <ul style={{padding: 0, margin: 0, paddingLeft: "20px", lineHeight: "20px"}}>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>Coded 21 Responsive JSX screens</li>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>Coordinated 3 months of social media</li>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>Posted 11 blogs at ellocale.com/blog</li>
                    </ul>

                    {/* <div style={{height: "30px", border: "none", borderLeft: "2px solid #000000", padding: 0, margin: 0, marginLeft: "20px", marginTop: "10px"}}></div> */}


                    <p style={{fonSize: "20px", color: "#242424", textAlign: "left", marginBottom: "5px"}}>
                        <span style={{padding: 0, margin: 0, fontSize: "20px"}}><b>INSHIFT</b> - ex-intern:<br /></span>
                    </p>
                    <ul style={{padding: 0, margin: 0, paddingLeft: "20px", lineHeight: "20px"}}>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>Researched best UI/UX design tools</li>
                        <li style={{fonSize: "20px", color: "#242424", textAlign: "left"}}>Presented an app to high schoolers</li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="Contact">
            <h2 style={{textAlign: "left", marginRight: "20px", marginLeft: "20px"}}>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <div style={{margin: '20px', display: "flex", flexDirection: "column", gap: "20px"}}>
                
                    <TextField
                        variant="outlined"
                        placeholder="Name"
                        name="name"
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
                        name="email"
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
                        name="Your Message"
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
                    type="submit" 
                    disabled={state.submitting}
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
            </form>
        </div>
    </React.Fragment>
  );
}
