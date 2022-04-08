import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Container>
        <hr
        style={{
            height: 0,marginTop: '5rem'
        }}
    />
        <Box mt={2} sx={{textAlign: 'center'}}>
            <Typography sx={{"fontFamily":"'Poppins', sans-serif"}} variant='subtitle1' gutterBottom>
                All Rights Reserved || Salaah - The Mentor Community
            </Typography>
        </Box>
    </Container>
  )
}

export default Footer