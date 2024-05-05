import React from 'react';
import SideNav from '../components/sideNav'
import NavBar from '../components/navBar'
import AccordionDash from '../components/accordionDash';
import { ChartDash } from '../components/chartDash';
import { GeoDash } from '../components/geoDash';
import { PieDash } from '../components/pieDash';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import '../styles/Dashboard.css';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Dashboard = () => {
  return (
    <>
    <div className='bgColor'>
    <NavBar />
    <Box height={70} />
      <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49 + "%", height: 164 }} className='gradientDark'>
          <CardContent className='iconStyle2'>
            <div>
              <CreditCardOutlinedIcon />
            </div>
            <Typography gutterBottom variant="h4" component="div">
              $500.00
            </Typography>
            <Typography gutterBottom variant="body3" component="div" sx={{color: "#ccd1d1"}}>
              Total Earnings
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 49 + "%", height: 164 }} className='gradientLight'>
          <CardContent className='iconStyle2'>
            <div>
              <ShoppingBagOutlinedIcon />
            </div>
            <Typography gutterBottom variant="h4" component="div">
              $900.00
            </Typography>
            <Typography gutterBottom variant="body3" component="div" sx={{color: "#ccd1d1"}}>
              Total Sales
            </Typography>
          </CardContent>
        </Card>
        </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack spacing={2}>
            <Card sx={{ minWidth: 345 }} className='gradientDark'>
                <Stack spacing={2} direction="row">
                  <div className='iconStyle'>
                    <StorefrontOutlinedIcon />
                  </div>
                  <div className='paddingall'>
                    <span className='priceTitle'>$0.00</span><br />
                    <span className='priceSubitle'>Total Income</span>   
                  </div>
                </Stack>
            </Card>
            <Card sx={{ minWidth: 345 }} className='gradientLight'>
              <Stack spacing={2} direction="row">
                  <div className='iconStyle'>
                    <StorefrontOutlinedIcon />
                  </div>
                  <div className='paddingall'>
                    <span className='priceTitle'>$100.00</span><br />
                    <span className='priceSubitle'>Total Income</span>   
                  </div>
                </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card sx={{ height: 60 +"vh" }}>
            <CardContent>
              <ChartDash />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 60 +"vh" }}>
            <CardContent>
              <div className='accordionStyles'>
                Popular Products
              </div>
              <AccordionDash />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card sx={{ height: 60 +"vh" }}>
            <CardContent>
              <GeoDash />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 60 +"vh" }}>
            <CardContent>
              <PieDash />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Box>
      </Box>
    </div>
    </>
  );
}

export default Dashboard;