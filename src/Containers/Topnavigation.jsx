import React from 'react'
import NavBar from '../components/NavBar'
import ButtonAppBar from '../components/AppBarComponent'
import LoginForm from '../components/LoginComponents'
import RegistrationForm from '../components/UserRegistration'

export default function TopContainer() {
  return (
    <>
        
        <ButtonAppBar/>
        <RegistrationForm/>
        <LoginForm/>

    </>
  )
}