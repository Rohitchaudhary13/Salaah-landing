import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'
import { Box } from '@mui/system';
import ParticlesBg from 'particles-bg'
import Logo from '../assets/salaah.png'

const Hero = () => {

  return (
    <>
    <div>
        <Grid container justifyContent='center' mt={8}>
        <Paper sx={{width: '45%', height: '55vh', textAlign: 'center', backgroundColor: '#E0E1E4'}}>
          <Box>
            {/* <Typography sx={{"fontFamily":"'Gilroy-Regular'"}} variant="h1">SALAAH</Typography> */}
            <img src={Logo} alt="myLogo" style={{width: '52%'}} />
          </Box>
          <Box pb={4}>
            <Typography sx={{"fontFamily":"'Poppins', sans-serif"}} variant="subtitle1">A Proud Family of More Than 10K Students!</Typography>
          </Box>
          <Box pb={4}>
            <Button variant="contained" sx={{backgroundColor: 'black', "fontFamily":"'Poppins', sans-serif", ':hover': {
      bgcolor: 'white',
      color: 'black',
    },}}>Join Now</Button>
          </Box>
        </Paper>
      </Grid>
      <Container>
        <Grid container justifyContent='center' mt={4}>
          <Grid item p={4}>
            <UseAnimations animation={facebook} size={40} strokeColor='white' style={{ padding: 100 }} />
          </Grid>
          <Grid item p={4}>
            <UseAnimations animation={instagram} size={40} strokeColor='white' style={{ padding: 100 }} />
          </Grid>
          <Grid item p={4}>
            <UseAnimations animation={twitter} size={40} strokeColor='white' style={{ padding: 100 }} />
          </Grid>
        </Grid>
      </Container>
    </div>
    <ParticlesBg type="lines" bg={true} />
    </>
    
  )
}

export default Hero