import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [value, setValue] = useState();

  return (
    <div className="nav">
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab
              LinkComponent={NavLink}
              to="/login"
              label="Login"
              className="tabs"
            />
            <Tab
              LinkComponent={NavLink}
              to="/signup"
              label="SignUp"
              className="tabs"
            />

            <Tab
              LinkComponent={NavLink}
              to="/add"
              label="Add product"
              className="tabs"
            />
            <Tab
              LinkComponent={NavLink}
              to="/books"
              label="Books"
              className="tabs"
            />
            <Tab
              LinkComponent={NavLink}
              to="/about"
              label="About Us"
              className="tabs"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
