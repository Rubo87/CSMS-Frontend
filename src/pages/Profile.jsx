import React from 'react'
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';
import Profile from '../components/profile';

export default function Accounts() {
  return (
    <>
    <div className='bgColor'>
      <NavBar />
      <Box height={30} />
          <Box>
          <SideNav />
            <Profile />
          </Box>
    </div>

    </>
  )
}
