import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import '../components/Home.css'

// images

import bgimages from '../images/desktop-wallpaper-portfolio-thumbnail.jpg'
import image1 from '../images/Professional Modern CV Resume.png'

// icons

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Box sx={{ mt: 4 }}>
                <Box>
                    <img className='images1' src={bgimages} alt='images' height={581} width='100%' />
                </Box>
                <Box sx={{ display: 'flex' }}>


                    {/* Icons Part */}


                    <Box sx={{ ml: 5, backgroundColor: '#000' }}>
                        <Box>
                            <Link to='https://www.linkedin.com/feed/'><LinkedInIcon sx={{ color: '#2196f3', position: 'absolute', top: 200, fontSize: '40px', cursor: 'pointer' }} /></Link>
                        </Box>
                        <Box>
                            <Link to='https://twitter.com/home'><TwitterIcon sx={{ color: '#2196f3', position: 'absolute', top: 260, fontSize: '40px', cursor: 'pointer' }} /></Link>
                        </Box>
                        <Box>
                            <Link to='https://www.facebook.com/'><FacebookIcon sx={{ color: '#2196f3', position: 'absolute', top: 380, fontSize: '40px', cursor: 'pointer' }} /></Link>
                        </Box>
                        <Box>
                            <Link to='https://github.com/'><GitHubIcon sx={{ color: '#2196f3', position: 'absolute', top: 320, fontSize: '40px', cursor: 'pointer' }} /></Link>
                        </Box>
                    </Box>


                    {/* Home Part */}


                    <Box>
                        <Box>
                            <Typography className='name' sx={{ color: 'white', position: 'absolute', top: 220, width: '50%', mx: 55, fontWeight: '800', fontSize: '35px' }}>
                                HII, I'M <span>UTSAV THUMMAR</span>
                            </Typography>
                            <Typography sx={{ color: 'white', position: 'absolute', top: 270, textAlign: 'center', width: '55%', mx: 39.5, mt: 4, fontWeight: '500', fontSize: '25px' }}>
                                A Frontend Web Developer building the Frontend of Websites <br /> that leads to the success of the overall product.
                            </Typography>


                            {/* Button Part */}


                            <Box sx={{ display: 'flex' }}>
                                <Link to={image1}><Button className='button1' sx={{ fontSize: '20px', position: 'absolute', top: 400, mx: 57, width: '15%', p: 1.5, color: '#fff', backgroundColor: '#2196f3', transition: '0.2s' }}>RESUME</Button></Link>
                                <Link to="/about"><Button className='button1' sx={{ fontSize: '20px', position: 'absolute', top: 400, mx: 87, width: '15%', p: 1.5, color: '#fff', backgroundColor: '#2196f3', transition: '0.2s' }}>About Me</Button></Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home