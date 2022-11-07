import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>HomePage</h1>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "green", borderRadius: "10px" }}
          variant="contained"
        >
          <Typography variant="h3">View All books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
