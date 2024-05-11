import React from 'react'
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';

export default function Calendar() {
  return (
    <>
    <NavBar />
    <Box height={70} />
      <Box sx={{ display: 'flex' }}>
      <SideNav />
        <div>Calendar</div>
      </Box>
    </>
  )
}
