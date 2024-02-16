import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../components/About.css'

// images

import bgimages from '../images/desktop-wallpaper-portfolio-thumbnail.jpg'

function About() {
    return (
        <>
            <Box sx={{ mt: -1 }}>
                <Box>
                    <img className='images1' src={bgimages} alt='images' height={920} width='100%' />
                </Box>


                {/* About Part */}


                <Box>
                    <Box sx={{ mt: 5, pt: 5 }}>
                        <Typography sx={{ textAlign: 'center', color: '#fff', fontSize: '50px', fontWeight: '800', position: 'relative' }}>
                            ABOUT ME
                        </Typography>
                        <Typography className='about' sx={{ textAlign: 'center', color: '#fff', fontSize: '20px', mt: 4, position: 'relative' }}>
                            I'm a <span>Front-End Web Developer</span> and I building the Front-end <br /> Websites, Using <span> HTML, CSS and React(Material-UI)</span>.I am a <br />  and I have learned <span>front-end course at Dotcode Institute</span>. I've also <br /> built a lots of websites while here and I've built them <span>mostly using Material-UI in React</span>.
                        </Typography>
                    </Box>


                    {/* Skill Part */}


                    <Box>
                        <Typography sx={{ textAlign: 'center', color: '#fff', fontSize: '50px', fontWeight: '800', mt: 10, position: 'relative' }}>
                            My Skills
                        </Typography>
                        <Box>
                            <Box sx={{ display: 'flex', gap: '150px', justifyContent: 'center', my: 7, position: 'relative' }}>
                                <Button className='button2' sx={{ justifyContent: 'center', border: '1px solid green', color: '#fff', p: 2, fontSize: '22px' }}>HTML</Button>
                                <Button className='button2' sx={{ justifyContent: 'center', border: '1px solid green', color: '#fff', p: 2, fontSize: '22px' }}>CSS</Button>
                                <Button className='button2' sx={{ justifyContent: 'center', border: '1px solid green', color: '#fff', p: 2, fontSize: '22px' }}>REACT</Button>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '110px', justifyContent: 'center', my: 7, position: 'relative' }}>
                                <Button className='button2' sx={{ justifyContent: 'center', border: '1px solid green', color: '#fff', p: 2, fontSize: '22px' }}>JAVA SCRIPT</Button>
                                <Button className='button2' sx={{ justifyContent: 'center', border: '1px solid green', color: '#fff', p: 2, fontSize: '22px' }}>MATERIAL-UI</Button>
                            </Box>
                        </Box>
                    </Box>


                    {/* Button Part */}

                    <Link to="/contact">
                        <Button className='button1' sx={{ justifyContent: 'center', border: '1px solid #2196f3', backgroundColor: '#2196f3', color: '#fff', mx: 74, p: 2, fontSize: '20px', mt: 12 }}>Contact Us</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default About