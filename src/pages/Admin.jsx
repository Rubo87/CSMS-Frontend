import React from 'react';
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import Box from '@mui/material/Box';
import '../styles/Dashboard.css';
import AdminView from '../components/adminView';



const Admin = () => {
  return (
    <>
    <div className='bgColor'>
    <NavBar />
    <Box height={70} />
    <Box sx={{ display: 'block', marginLeft: '15%', marginRight: '2%' }}>
      <Box>
      <SideNav />
      <AdminView />
      </Box>
      </Box>
    </div>
    </>
  );
}

export default Admin;