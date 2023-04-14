import React from 'react'
import {AppBar,styled, Box,Toolbar,Typography, InputBase, Badge, Avatar} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import { Mail } from '@mui/icons-material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <StyledToolBar>
      <Typography variant = "h6" sx={{display:{xs:"none", sm:"block"}}}>DAN DEV</Typography>
      <AdbIcon sx={{display:{xs:"block", sm:"none"}}}/>
      <Search>
        <InputBase placeholder ="searching ....."/>
      </Search>
      <Icons>

      <Badge badgeContent={4} color="primary">
      <Mail color="action" /> 
      </Badge>

      <Badge>
        
      </Badge>
      
      <Avatar/>

      </Icons>

    </StyledToolBar>
    </AppBar>
    
  )
}

const StyledToolBar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width:"40%"
}))

const Icons = styled(Box)(({theme})=>({backgroundColor:"white"}))