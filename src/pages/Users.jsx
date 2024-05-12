import React from 'react'
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';
import DataUsers from '../components/dataUsers';

export default function Accounts() {
  return (
    <>
    <div className='bgColor'>
      <NavBar />
      <Box height={70} />
          <Box sx={{ display: 'flex' }}>
          <SideNav />
            <DataUsers />
          </Box>
    </div>

    </>
  )
}
