import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography,TextField,Button,Box,Container } from '@mui/material'
import ButtonAppBar from '../appbar'


const RegistrationForm = ()=>{
    <ButtonAppBar/>
    const [ UserDetails,setRegistrationData] = useState({
        Name:'',
        Email:'',
        Phone:'',
    });

    const handleChange = (event) =>{
        const {name,value}=event.target;
        setRegistrationData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <Box py={3} bgcolor="grey.200">
            <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dual Application
          </Typography>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                   Registration Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    id="name" 
                    label="Your Name" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Email Id" 
                    label="Email Id" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.EmailId}
                    onChange={handleChange} 
                    />
                    <TextField
                    id="password" 
                    label="password" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.password}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Phone Number" 
                    label="Phone Number" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={UserDetails.Phonenumber}
                    onChange={handleChange} 
                    />
                    <Button type="submit" variant="container">
                        Register</Button>
                    <Typography variant="body2" align="left">
                        if you are Registered Click on Login button
                        </Typography>
                    <Button type="submit" variant="container">
                        Login</Button>
                </form>
            </Container>
        </Box>
    )
}
export default RegistrationForm;