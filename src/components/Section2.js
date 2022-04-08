import { Box, Container, Grid, Paper, Skeleton, Typography } from '@mui/material'
import React from 'react'

const Section2 = () => {
  return (
    <Paper style={{padding: '2rem'}}>
        <Container>
            <Grid mt={2} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
                <Grid item xs={6}>
                    <Typography sx={{"fontFamily":"'Gilroy-Regular'", textAlign: 'center'}} variant='h2' gutterBottom>Mission</Typography>
                    <Skeleton variant='rectangular' sx={{width: '100%', height: '70vh', bgcolor: 'grey.900'}} />
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{"fontFamily":"'Gilroy-Regular'", textAlign: 'center'}} variant='h2' gutterBottom>Vision</Typography>
                    <Skeleton variant='rectangular' sx={{width: '100%', height: '70vh', bgcolor: 'grey.900'}} />
                </Grid>
            </Grid>
        </Container>
    </Paper>
  )
}

export default Section2