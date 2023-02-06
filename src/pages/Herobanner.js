import React from "react";
import { Box, Typography } from "@mui/material";
import "./Herobanner.css";

import HeroBannerImage from "../assets/images/banner.jpg";

const Herobanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
    display="flex"
    flexWrap="wrap"
    justifyContent="space-between"
  >
    <div>
      <Typography color="#FF2625" fontWeight="300" fontSize="56px">
        Free Weight
      </Typography>
      <Typography
        fontWeight={550}
        sx={{ fontSize: { lg: "40px", xs: "40px" } }}
        mb="53px"
        mt="30px"
      >
        Exercise Should be Mandatory, <br />
        if You have a desk Job.
      </Typography>
      <Typography
        fontWeight={300}
        sx={{ fontSize: { lg: "30px", xs: "30px" } }}
        mb="33px"
        mt="30px"
      >
        Track your Workout by using <br />
        Free Weight App!
      </Typography>
    </div>

    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default Herobanner;
