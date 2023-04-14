// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { MuiTypography } from './components/muiTypography'

// import { MuiButton } from './components/muiButton'
// import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import SettingsIcon from '@mui/icons-material/Settings';
// import { green } from '@mui/material/colors';
// import Sidebar from './components/Sidebar'
// import Feed from './components/Feed'
// import Rightbar from './components/Rightbar'
import Navbar from './components/Navbar'
// import { Box, Container, Stack } from '@mui/material';
import Home from './components/Home'
import { BrowserRouter,Route, RouterProvider, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AddQuestion from './components/AddQuestion';
import { Update } from '@mui/icons-material';
import UpdateQuestion from './components/UpdateQuestion';


function App() {
  return (
    <>
    {/* <Box>
      // <Navbar/> */}
      {/* <br/> */}
      {/* <Stack direction ="row" spacing = {2} justifyContent="space-between">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>

    </Box> */}

      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<AddQuestion/>}/>
            <Route path="/pricing" element={<UpdateQuestion/>}/>
            <Route path="/blog" element={<UpdateQuestion/>}/>

        </Routes> 
     </>
  );
}

export default App;

 {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
    //   <Button startIcon= {<SettingsIcon/>} variant="text">Text</Button>
    //   <Button variant="contained" color= 'secondary' sx={{
    //     backgroundColor:'skyblue',
    //     "&:hover":{ backgroundColor:'green'},
    //     "&:disabled":{backgroundColor:'black'}
    // }}>Contained</Button>
    //   <Button variant="outlined">Outlined</Button>
