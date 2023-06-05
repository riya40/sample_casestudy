import React from 'react'
import NavBar from '../components/NavBar'
import Users from '../components/getUser'
import Usds from '../components/getUsd'

export default function BotomContainer() {
  return (
    <>
        <NavBar/>
        <Users/>  
        <Usds/>
    </>
  )
}