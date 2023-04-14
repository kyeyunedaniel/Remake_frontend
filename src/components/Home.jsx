import React from 'react'
// import logo from './logo.svg';
// import './App.css';
// import { MuiTypography } from './components/muiTypography'

// import { MuiButton } from './components/muiButton'
// import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@mui/icons-material/Settings';
// import { green } from '@mui/material/colors';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Navbar from './Navbar'
import { Box, Container, Stack } from '@mui/material';

function Home() {
  return (
    <Box>
      {/* <Navbar/> */}
      {/* <br/> */}
      <Stack direction ="row" spacing = {2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>

    </Box>
  )
}

export default Home