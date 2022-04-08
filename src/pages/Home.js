
import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'
import { Box } from '@mui/system';
import Hero from '../components/Hero';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
// import Logo from './logo1.png';


const Home = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home

// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import Navbar from '../components/Navbar';
// import { Container, Grid, Paper } from '@mui/material';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// function MyApp() {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext);
//   return (
//     <Box
//       sx={{
//         bgcolor: 'background.default',
//         color: 'text.primary',
//         height: '100vh',
//       }}
//     >
//       {/* sx={{display: 'flex', flexDirection: 'row',}} */}
//       <Box>
//         <Grid container>
//           <Grid item>
//             <IconButton onClick={colorMode.toggleColorMode} color="inherit">
//               {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <Navbar />
//           </Grid>
//         </Grid>
//       </Box>
//       <h1>Salaah!</h1>
//     </Box>
//   );
// }

// export default function Home() {
//   const [mode, setMode] = React.useState('light');
//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     [],
//   );

//   const theme = React.useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode],
//   );

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <MyApp />
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }