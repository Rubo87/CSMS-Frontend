import React from 'react'
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';
import CalendarView from '../components/calendar';

export default function Calendar() {
  return (
    <Box>
    <NavBar />
    <Box height={70} />
      <Box sx={{ display: 'block', marginLeft: '15%', marginRight: '2%' }}>
      <SideNav />
      <CalendarView />
      </Box>
    </Box>
  )
}
