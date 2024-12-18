import { Box, Typography } from '@mui/material'
import React from 'react'

function Canvas() {
  return (
   <Box sx={{
    height:"100vw",
    background: "linear-gradient(to left, #000000 0%, #000066 100%)",
    display:"flex",
    padding:"4vw 8vw",
    gap:"4vw",
   }}>
    <Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:'flex-end',
            height:"30vw"
        }}><Typography  sx={{
                color:"white",
                fontSize:"5vw",
            }}>
                Hi, I am Maharshi Manubrolu
            </Typography>
            <Typography sx={{
                color:"white"
            }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis rerum quia, eos suscipit optio temporibus perferendis necessitatibus delectus, eligendi doloremque neque provident nam beatae iure, sit fuga at explicabo quaerat!
            </Typography></Box>
            
        </Box>
        <Box>
            
            <Box component={"img"} alt='Profile_image' src='assets/photo-1-bg-removed.png' sx={{
            height:"37vw",
            animation:"bounce 0.5s",
            animationDirection:"alternate",
            animationTimingFunction : "cubic-bezier(.5, 0.05, 1, .5)",
            animationIterationCount:"infinite",

            
          
           }}/>
        </Box>
   </Box>
  )
}

export default Canvas