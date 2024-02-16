import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './Contact.css'

// images

import bgimages from '../images/desktop-wallpaper-portfolio-thumbnail.jpg'

function Contact() {
    return (
        <>
            <Box sx={{ mt: -76 }}>
                <Box>
                    <img className='images1' src={bgimages} alt='images' height={950} width='100%' />
                </Box>
                <Typography sx={{ mt: 80, fontWeight: 'bold', fontSize: '40px', top: 30, position: 'relative', color: '#fff', textAlign: 'center' }}>
                    Contact <span>Us</span>
                </Typography>
                <Box sx={{ justifyContent: 'center', mx: 60, border: '1px solid #2196f3' }}>
                    <Box sx={{ position: 'relative', mt: 5, gap: 10 }}>
                        <Box>
                            <input className='input0' type="text" placeholder='First Name' />
                            <input className='input1' type="text" placeholder='Second Name' />
                            <input className='input2' type="text" placeholder='Last Name' />
                        </Box>
                        <Box sx={{ mt: 6 }}>
                            <input className='input' type="number" placeholder='Mobile Number' />
                        </Box>
                        <Box sx={{ mt: 6 }}>
                            <input className='input' type="email" placeholder='Email-Id' />
                        </Box>
                        <Box sx={{ mt: 6 }}>
                            <input className='input' type="password" placeholder='Password' />
                        </Box>
                    </Box>
                    <Button className='button3' sx={{ border: '1px solid green', color: '#fff', p: 2, fontSize: '22px', mt: 5, ml: 18 }}>Submit</Button>
                </Box>
            </Box>
        </>
    )
}

export default Contact