import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function HomeView() {
  const heroStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '99vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
    textAlign: 'center',
  }
  const buttonStyle = {
    marginTop: '20px',
  }
  return (
    <>
          <Grid container spacing={3}>
            <Grid item xs={12} style={heroStyle}>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Your Account <br />
                Management Software
              </Typography>
              <Link to="/dashboard">
              <Button variant="contained" color="primary" style={{ ...buttonStyle, fontSize: '1.2rem', padding: '12px 24px' }}>
  Get Started
</Button>
                </Link>
            </Grid>
          </Grid>
    </>
  )
}



