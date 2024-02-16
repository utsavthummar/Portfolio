import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import '../components/Header.css'
import image1 from '../images/WhatsApp Image 2024-02-05 at 12.35.13 PM.jpeg'

// images123

import bgimages1 from '../images/black-rough-grainy-stone-texture-background_180922-738.jpg'

function Header() {
    return (
        <>
            <Box sx={{
                display: 'flex', justifyContent: 'space-between',
                "& :hover": {
                    color: '#7843e9'
                }
            }}>
                <Box>
                    <img className='images1' src={bgimages1} alt='images' height={100} width='100%' />
                </Box>
                <Box sx={{ display: 'flex', mr: 15, mt: 2 }}>
                    <Box sx={{ display: 'flex' }}>
                        <img className='image1' src={image1} alt="" height={50} width={50} />
                        <Typography sx={{ color: '#fff', fontWeight: '700', mt: 0.5, fontSize: '28px', ml: 2, position: 'relative' }}>
                            Utsav Thummar
                        </Typography>
                    </Box>
                    <Box className='navbar' sx={{ fontWeight: '700', position: 'relative', ml: 55, mt: 1 }}>
                        <Link className='nav1' href='/'>Home</Link>
                        <Link className='nav1' href='/about'>About</Link>
                        <Link className='nav1' href='/contact'>Contact</Link>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Header