import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import section1_Image from '../assets/drw1.svg';
import Skeleton from '@mui/material/Skeleton';

const Section1 = () => {
  return (
    <div>
        <Container style={{height: '90vh'}}>
            <Grid container mt={8} mb={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
                <Grid item xs={6} alignSelf='center'>
                    <Typography sx={{"fontFamily":"'Gilroy-Regular'"}} variant="h1" gutterBottom>
                        About Us
                    </Typography>
                    <Typography variant='body1' sx={{"fontFamily":"'Poppins', sans-serif"}}>
                    Salaah is a mentor community that aims to connect present students
with their alumni to get guidance about the career which they want to
pursue further. They can guide us in many fields apart from our
academics. It would be a great help to the students to get guidance
about what to do when to do it and how to do it.
                    </Typography>
                </Grid>
                <Grid item xs={6} justifyContent='center'>
                    <img src={section1_Image} alt="Image1" />
                    {/* <Skeleton sx={{ bgcolor: 'grey.900', width: '100%', height: '80vh' }} variant="rectangular" /> */}
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Section1