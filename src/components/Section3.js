import { Container, Grid, Skeleton, Typography } from '@mui/material'
import React from 'react'
import section3_Image from '../assets/drw3.svg';
const Section3 = () => {
  return (
    <div>
        <Container>
            <Grid container mt={8} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }} justifyContent='center'>
                <Grid item xs={6} justifyContent='center'>
                <img src={section3_Image} alt="Image1" />
                </Grid>
                <Grid item xs={6} alignSelf='center'>
                    <Typography sx={{"fontFamily":"'Gilroy-Regular'"}} variant="h1" gutterBottom>
                        What is the Need?
                    </Typography>
                    <Typography sx={{"fontFamily":"'Poppins', sans-serif"}} variant='body1'>
                    Looking into the current scenario, we can see that there is a huge gap
between our alumni and the students. This is the major reason why we
all thought of making a community that aims to fill this gap between
the alumni and students. Alumni connected to this community will be
with us in every aspect and every step we take. As college students we
all need guidance and mentoring for further opportunities.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

export default Section3