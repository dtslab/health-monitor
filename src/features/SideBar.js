import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";

export const SideBar = () => {
  return (
    <React.Fragment>
      <Drawer
        width="400"
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          zIndex: 0,
          position: "relative",
          width: 400,
          "& .MuiDrawer-paper": {
            width: 180,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem
            className="menu"
            button
            component={Link}
            to="/health-track/"
            key="Dashboard"
          >
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <Divider variant="middle" color="#EDE6F6" />
          <ListItem
            className="menu"
            button
            component={Link}
            to="/health-track/weight"
            key="Weight"
          >
            <ListItemIcon>
              <StraightenOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Weight" />
          </ListItem>
          <Divider variant="middle" color="#EDE6F6" />
          <ListItem
            button
            component="a"
            target="_blank"
            href="https://dtslab.vercel.app/"
          >
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="About Me" />
          </ListItem>
          <Divider variant="middle" color="#EDE6F6" />
        </List>
      </Drawer>
    </React.Fragment>
  );
};
