import React from 'react'
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';
import HomeView from '../components/homeView';


export default function Home() {

  return (
    <>
    <NavBar />
    <Box />
      <Box>
        <SideNav />
        <HomeView />
      </Box>
    </>
  )
}



