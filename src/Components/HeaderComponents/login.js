import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import { Button, IconButton, Menu, MenuItem  } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
    login: {
      position : 'absolute',
      left: '93%'
    },
  }));

const Login = (props)=>{
    const classes = useStyles();
    const menuId = 'primary-search-account-menu';
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const isMenuOpen = Boolean(anchorEl);

    function handleProfileMenuOpen(event) {
        setAnchorEl(event.currentTarget);
      }
      
      function handleMenuClose() {
        setAnchorEl(null);
        setIsLoggedIn(false)
      }
      function handleLogin() {
        setIsLoggedIn(true)
      }
      
      const renderMenu = ()=> {
        return(
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>)
      };
      

    return <div className={classes.login}>
        {!isLoggedIn?
        <Button color="inherit" onClick={handleLogin}>Login</Button>:
        <div>
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <AccountCircle />
            </IconButton>
            {renderMenu()}
        </div>}
    </div>
}

export default Login;