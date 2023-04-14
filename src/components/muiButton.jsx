// import React from 'react'
import { Button, Stack  } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

export const MuiButton = () => {
  return (
<Stack>
<Stack spacing={2} direction = 'row'>
        <Button variant='text' href='google.com' target={'_blank'}>Text</Button>

        {/* login button  */}
        <Button variant='contained'>Contained</Button>

        {/* used for secondary actions in the application  */}
        <Button variant='outlined'>Outline</Button>
       
</Stack> <br/>
    <Stack spacing = {2} direction='row'> 
    <Button variant='contained' color ='primary'>primary</Button>
    <Button variant='text' color ='secondary'>seconday-text</Button>
    <Button variant='outlined' color ='error'>error-outlined</Button>
    <Button variant='contained' color ='warning'>warning</Button>
    <Button variant='contained' color ='info'>info</Button>
    <Button variant='contained' color ='success'>success</Button>
    </Stack>
<br/>
{/* notice all buttons are in uppercase */}
    <Stack display ='block' spacing ={2} direction='row'>
    <Button variant ='contained' size ='small'> small-contained</Button>
    <Button variant ='text' size ='medium'> medium-textStyle</Button>
    <Button variant ='contained' size ='large'> large-contained</Button>
    </Stack>

    {/* adding icons in the buttons */}
    <Stack spacing ={2} direction = 'row'>
        {/* in the button below we have disabaled the ripple when you click */}
        <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=>{ alert('hello alert')}}>Start Icon</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>End Icon</Button>

        {/* adding the icon alone */}
        <IconButton aria-label='send' color='success' size = 'medium'>
            <SendIcon/>
        </IconButton>
    </Stack>

</Stack>
  )
}
