import React,{useState} from 'react'
import {Typography,AppBar, Button,Card, CardAction, CardContent,CardMedia,CssBaseline,Grid,Toolbar,Tabs,Tab, Drawer} from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';

const Material = () => {
  const [value, setvalue] = useState();

  return (
    <>
    <CssBaseline />
    <AppBar position='relative' sx={{ background:"#d1b4b2"}} >
        <Toolbar >
            <HeadphonesIcon />
              <Tabs  value={value}  onChange={ (e,value)=>setvalue(value)}  indicatorColor ="Secondary" >
                 <Tab label= "product"  />
                 <Tab label= "Services" />
                 <Tab label= "aboutus" />
                 <Tab label= "contactus" />
              </Tabs>
              <Button sx={{marginLeft: "auto"}}  variant="outlined"  > login {''}</Button>
              <Button sx={{marginLeft: "10px"}}  variant="contained"  > signup {''}</Button>
        </Toolbar>
        < Drawer />
    </AppBar>
    </>
  )
}

export default Material