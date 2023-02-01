import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const Herobanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" mr="800px" fontSize="26px">Free Weight</Typography>
    <Typography fontWeight={600} sx={{ fontSize: { lg: '40px', xs: '40px' } }} mb="53px" mr="800px" mt="30px">
      Exercise Should be Mandatory, <br />
      if You have a desk Job.
    </Typography>
    
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default Herobanner

