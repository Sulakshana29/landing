import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import './NavBar.css';

const NavBar = () => {
    const { theme, toggleTheme } = useTheme();
    const textColor = theme === 'dark' ? '#fff' : '#000'; // Change text color based on theme

    return (
        <AppBar position="static" className={`navbar ${theme === 'dark' ? 'dark' : 'light'}`}>
            <Toolbar>
                <Typography variant="h5" className="navbar-title" style={{ color: textColor }}>
                    THE DEALERSHIP
                </Typography>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/"
                    className="nav-button"
                    style={{ color: textColor }}
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/about"
                    className="nav-button"
                    style={{ color: textColor }}
                >
                    About
                </Button>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/contact"
                    className="nav-button"
                    style={{ color: textColor }}
                >
                    Contact Us
                </Button>
                <Button
                    color="inherit"
                    onClick={toggleTheme}
                    className="nav-button"
                    style={{ color: textColor }}
                >
                    Toggle Theme
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
