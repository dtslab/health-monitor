import { Box, Toolbar } from "@mui/material";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import gymIcon from "../asset/gymIcon.png";
import github from "../asset/github.png";
import linkedin from "../asset/linkedin.png";
import mail from "../asset/email.png";

export const NavBar = () => {
  return (
    <AppBar
      elevation={0}
      sx={{ position: "fixed", zIndex: 1, bgcolor: "white" }}
    >
      <Toolbar>
        <img
          src={gymIcon}
          alt="gymIcon"
          width={25}
          height={25}
          style={{ marginRight: 10 }}
        />
        <Typography variant="h6" noWrap component="div">
          Health Track
        </Typography>
        <Box style={{ flexGrow: 10 }}> </Box>
        {/* <Box  sx={{ display: "flex", alignItems: "center" }}>
            <a id="github" href='/' target="_blank"  rel="noreferrer">
              <img
                style={{ width: 28, margin: 5 }}
                src={github}
                alt='github icon'
              />
            </a>{" "}
            <a id="linkedin" href='/' target="_blank"  rel="noreferrer">
              <img
                style={{ width: 28, margin: 3 }}
                src={linkedin}
                alt='linkedIn icon'
              />
            </a>{" "}
            <a id="mail" href='/'>
              <img
                style={{ width: 35, margin: 5 }}
                src={mail}
                alt='mail icon'
              />
            </a>
          </Box> */}
      </Toolbar>
    </AppBar>
  );
};
