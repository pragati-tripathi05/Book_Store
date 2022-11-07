import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div style={{ marginTop: "5%" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          This is a Full Stack CRUD App
        </Typography>
        <br />
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          MERN CRUD and Deployment
        </Typography>
      </Box>
    </div>
  );
};

export default About;
