import react from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { Stack } from '@mui/material';
import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import FitnessHistory from '../screens/FitnessHistory';
// import WorkoutForm from '../screens/WorkoutForm';



export const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "100px", height: "100px", margin: "0px 20px", borderRadius: "30px"}}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
      flexWrap="wrap"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <Link to='signup' style={{ textDecoration: 'none', color: '#3A1212' }}>
        Signup
      </Link>
      <Link to='login' style={{ textDecoration: 'none', color: '#3A1212' }}>
        Login
      </Link>
      <Link to='fitnesshistory' style={{ textDecoration: 'none', color: '#3A1212' }}>
       FitnessHistory
      </Link>
      {/* <Link to='workoutform' style={{ textDecoration: 'none', color: '#3A1212' }}>
        WorkoutForm
      </Link> */}
    </Stack>
  </Stack>
);
