import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { Stack } from '@mui/material';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { Home } from '../pages/Home';

export const Navbar = () => (
  <Stack
    direction='row'
    justifyContent='space-around'
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      justifyContent: 'none',
    }}
    px='20px'
  >
    <Link to='/'>
      <img
        src={Logo}
        alt='logo'
        style={{ width: '50px', height: '50px', margin: '0px 20px' }}
      />
    </Link>
    <Stack
      direction='row'
      gap='40px'
      fontFamily='Alegreya'
      fontSize='24px'
      alignItems='flex-end'
    >
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: '3px solid #FF2625',
        }}
      >
        <Home/>
      </Link>
      <Link to='signup' style={{ textDecoration: 'none', color: '#3A1212' }}>
        <Signup/>
      </Link>
      <Link to='login' style={{ textDecoration: 'none', color: '#3A1212' }}>
        <Login/>
      </Link>
    </Stack>
  </Stack>
);
