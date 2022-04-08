import { Button, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styledComponents from 'styled-components';

const StyledLink = styledComponents(Link)`
  color: white;
  text-decoration: none;
`;




const Navbar = () => {
  return (
    <div>
        <Grid container justifyContent='right' p={2}>
            <Grid item p={2}>
                <StyledLink to="/">Home</StyledLink>
            </Grid>
            <Grid item p={2}>
                <StyledLink to="/">About</StyledLink>
            </Grid>
            <Grid item p={2}>
                <StyledLink to="/">FAQ's</StyledLink>
            </Grid>
        </Grid>
    </div>
  )
}

export default Navbar