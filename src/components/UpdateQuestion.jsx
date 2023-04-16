import { Box, TextField } from '@mui/material'
import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function UpdateQuestion() {
  <meta name="csrf-token" content="{{ csrf_token() }}"></meta>
  const[name, setName]= useState("");
  const[password,setPassword]=useState("")
  const[email, setEmail]=useState("")
  
  async function signUp(){
    // console.warn(name,email,password)
    // if(!=null & email!=null & password!==null) 
    // {
      // console.warn(name,email,password) 
      let user_data ={name,email,password}
      console.warn(user_data)
      let result = await fetch("http://localhost:8000/api/register", {
      method:"POST", 
      body:JSON.stringify(user_data), 
      headers:
      {
        "Content-Type":"application/json", 
        "Accept":"application/json",
        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
      }})

      result = await result.json()
      console.warn("result",result)
    // }
  }



  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '26ch' },
      }}
      noValidate
      autoComplete="off"
    >  
      <div>
      <TextField id="name" label="Name" value={name} onChange ={(e)=>setName(e.target.value)} type="text" variant="outlined" size="small" required/>
      </div> 
      <div>
      <TextField id="email" label="Email" value={email} onChange ={(e)=>setEmail(e.target.value)}type="email" variant="outlined" size="small" required/>
      </div>

    
      <FormControl sx={{ m: 1, width: '26ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton >
              </InputAdornment>
            }
            label="Password"
            size="small" value={password}
            onChange ={(e)=>setPassword(e.target.value)}
            required
          />
        </FormControl>
    

      {/* <div> */}
      <Stack spacing={3} direction="row">

      <Button variant="contained" onClick={signUp}>Submit</Button>
    </Stack>
      {/* </div> */}
    </Box>
  )
}

export default UpdateQuestion
