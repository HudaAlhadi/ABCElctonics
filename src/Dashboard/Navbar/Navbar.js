import "./navbar.scss";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from "react-redux";
import { Search, SettingsOutlined } from "@mui/icons-material";
import FlexBetween from "../../Components/UI/Flexbetween";
import { Icon, InputBase } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <InputBase />
          <IconButton>
            <Search />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;