import React from 'react'
import {Box} from '@mui/material'

export default function Sidebar() {
  return (
    <Box sx={{backgroundColor:"skyblue", display:{ xs : "none", sm: "block" }}} flex ={1} p={2}>
      Sidebar
    
    </Box>
  )
}
