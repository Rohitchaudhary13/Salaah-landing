import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';
import { Box } from '@mui/system';

export default function SimpleAccordion() {
  return (
    <div>
    <Box mt={9} mb={6} sx={{textAlign: 'center'}}>
        <Typography sx={{"fontFamily":"'Gilroy-Regular'"}} variant='h3' gutterBottom>FAQ's</Typography>
    </Box>
    <Container >
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>What is Salaah ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>
          Salaah is a mentor community that aims to connect present students
            with their alumni to get guidance about the career which they want to
            pursue further. They can guide us in many fields apart from our
            academics. It would be a great help to the students to get guidance
            about what to do when to do it and how to do it.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>Why do we need Salaah ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>
          Looking into the current scenario, we can see that there is a huge gap
            between our alumni and the students. This is the major reason why we
            all thought of making a community that aims to fill this gap between
            the alumni and students. Alumni connected to this community will be
            with us in every aspect and every step we take. As college students we
            all need guidance and mentoring for further opportunities. Experience
            speaks for itself, our alumni have achieved great heights in life and if
            we get this golden opportunity to be trained by them, we will achieve
            great height as well.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>Is Salaah a club or a chapter?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>
            Salaah is a Mentor Community of ABESEC which was created to provide mentorship to the students. It aims to connect present students
with their alumni to get guidance about the career which they want to
pursue further.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>Is there any hierarchial process in the community?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>
          Unlike any other society or club, in our community, no individual
will have a monopoly or authoritative power regarding any major
decisions. Board members will equally hold rights and work for the
welfare of the community.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{"fontFamily":"'Poppins', sans-serif"}}>What is the aim of salaah ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{"fontFamily":"'Poppins', sans-serif",}}>
          We aim to bridge the gap between alumni and students. This can be
            done by making students personally interact with the alumni, who are
            much ahead in their favorable and respective fields, by conducting
            various mentorship sessions related to different professional paths
            that exist.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
    </div>
  );
}