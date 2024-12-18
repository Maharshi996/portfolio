import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Navbar() {
  return (
    <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        background: "linear-gradient(to left, #000000 0%, #000066 100%)",
        color:"white",
        height:"5vw"
    }}>
        <Typography>
            About
        </Typography>
        <Typography>
            Skills
        </Typography>
        <Typography>
            Experience
        </Typography>
      
        <Typography>
            Achievements/Projects
        </Typography>
        <Typography>
            Education
        </Typography>
        <Typography>
            Social
        </Typography>
        <Typography>
            Feedback
        </Typography>
    </Box>
  )
}

export default Navbar