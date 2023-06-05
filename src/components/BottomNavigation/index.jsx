import React, { useState } from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {BottomNavigation, BottomNavigationAction} from '@mui/material'
import HomePage from '../HomePage';
import LoginForm from '../LoginComponents';
import RegistrationForm from '../UserRegistration';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';


export default function BottomNavigationComponent() {
    const [value,setValue]=useState(0)
    const handleChange = (e,newValue) => {
        setValue(newValue);

    };
  return (
    <>
      {value === 0 && <HomePage />}
      {value === 1 && <RegistrationForm />}
      {value === 2 && <LoginForm />}

        <BottomNavigation
            value={value}
            onChange={handleChange}
            showLabels>
        
        <BottomNavigationAction  color='success' label="" icon={<PersonOutlineIcon/>} />
        <BottomNavigationAction  color='success' label="" icon={<LoginOutlinedIcon/>} />
        </BottomNavigation>

    </>

  )

}
