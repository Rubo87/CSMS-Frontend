import React, { useState } from 'react';
import SideNav from './sideNav';
import NavBar from './navBar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/Dashboard.css';

const Profile = () => {
    const [expanded, setExpanded] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className='bgColor'>
                <NavBar />
                <Box />
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                        <Box height={20} />
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <img
                                                    src="https://media.licdn.com/dms/image/C4E03AQH3RpSX_zXhzQ/profile-displayphoto-shrink_800_800/0/1653555837732?e=1721260800&v=beta&t=aJPWElePoYXDo3LR764fLh23KhYGPd0hH_7qI1B2hIY"
                                                    alt="Profile"
                                                    style={{
                                                        width: '150px',
                                                        height: '150px',
                                                        borderRadius: '50%',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                                                    Personal details
                                                </Typography>
                                                <Typography>
                                                    <strong>Username:</strong> johndoe<br />
                                                    <strong>Email:</strong> johndoe@example.com<br />
                                                    <strong>Password:</strong>
                                                    <span>{showPassword ? "password123" : "********"}</span>
                                                    <IconButton
                                                        onClick={togglePasswordVisibility}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                                            Skills
                                        </Typography>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} aria-label="skills table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Backend</TableCell>
                                                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Frontend</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell align="center">Node.js</TableCell>
                                                        <TableCell align="center">React</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align="center">Express.js</TableCell>
                                                        <TableCell align="center">Redux</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align="center">MongoDB</TableCell>
                                                        <TableCell align="center">HTML/CSS</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell align="center">Security</TableCell>
                                                        <TableCell align="center">JavaScript</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2bh-content"
                                                id="panel2bh-header"
                                            >
                                                <Typography sx={{ width: '80%', flexShrink: 0, fontWeight: 'bold' }}>Users</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <strong>Connected Users:</strong><br />
                                                    - Jane Smith<br />
                                                    - Robert Brown<br />
                                                    - Emily Johnson
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3bh-content"
                                                id="panel3bh-header"
                                            >
                                                <Typography sx={{ width: '80%', flexShrink: 0, fontWeight: 'bold' }}>Advanced settings</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <strong>Preferences:</strong><br />
                                                    - Theme: Dark Mode<br />
                                                    - Notifications: Enabled<br />
                                                    <strong>Security:</strong><br />
                                                    - Two-Factor Authentication: Enabled
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel4bh-content"
                                                id="panel4bh-header"
                                            >
                                                <Typography sx={{ width: '80%', flexShrink: 0, fontWeight: 'bold' }}>Personal data</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    <strong>Address:</strong><br />
                                                    123 Main St, Anytown, USA<br />
                                                    <strong>Phone:</strong><br />
                                                    (123) 456-7890<br />
                                                    <strong>Date of Birth:</strong><br />
                                                    January 1, 1990
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
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

export default Profile;
