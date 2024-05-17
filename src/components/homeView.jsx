import React from 'react';
import Typography from '@mui/material/Typography';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/pexels-nietjuh-1906440.jpg'; 

export default function HomeView() {
    const heroStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '99vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'black',
      textAlign: 'center',
      padding: '0 20px',
    };
  
    const buttonStyle = {
      marginTop: '20px',
      fontSize: '1.2rem',
      padding: '12px 24px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    };
  
    const buttonHoverStyle = {
      backgroundColor: '#ff4081',
      transform: 'scale(1.05)',
    };
  
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} style={heroStyle}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Your Account <br />
              Management Software
            </Typography>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                style={buttonStyle}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                  e.currentTarget.style.transform = buttonHoverStyle.transform;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.transform = '';
                }}
              >
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }
  