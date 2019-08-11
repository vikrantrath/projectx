import React from 'react';
// import { makeStyles  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';

import SideDrawer from './HeaderComponents/sideDrawer'
import SearchBox from './HeaderComponents/searchBox'
import Login from './HeaderComponents/login'

// const useStyles = makeStyles(theme => ({
  
// }));

const Header = (props)=>{
// const classes = useStyles();
return <AppBar position = 'relative'>
          <Toolbar>
          <SideDrawer />
          <Typography variant="h4" >
            ProjectX
          </Typography>
          <SearchBox />
          <Login />
          </Toolbar>
        </AppBar>
}
export default Header