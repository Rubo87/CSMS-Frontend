import React from 'react'
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';

export default function Charts() {
  return (
    <>
    <NavBar />
    <Box height={30} />
      <Box sx={{ display: 'flex' }}>
      <SideNav />
        <div>Charts</div>
      </Box>
    </>
  )
}
