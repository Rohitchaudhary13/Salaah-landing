import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from "../images";
import '../components/section4.css';

const Section4 = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
    
  return (
    <div>
        <Container>
            <Box mt={10} mb={6} sx={{textAlign: 'center'}}>
                <Typography sx={{"fontFamily":"'Gilroy-Regular'"}} variant='h3' gutterBottom>
                    Governing Board
                </Typography>
            </Box>
            <Box>
              <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                className="inner-carousel">
                  {images.map((image) => {
                    return (
                      <motion.div className="item" key={image}>
                        <img src={image} alt="hello" />
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            </Box>
        </Container>
    </div>
  )
}

export default Section4
