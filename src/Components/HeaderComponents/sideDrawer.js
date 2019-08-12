import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {List ,ListItem, ListItemIcon, ListItemText, SwipeableDrawer, IconButton} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppContext } from '../../StateManagement/useAppState';
import SideBarMenu from '../../Resources/SideBarMenu.json'

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
      },
      hide: {
        display: 'none',
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
}))


const Sidedrawer = (props)=>{
    const classes = useStyles();

    const [state, setState] = React.useState({
        isOpen : false
      });
    const loginStatus = useAppContext().state.loginStatus

    
      const toggleDrawer = (isOpen) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, isOpen: isOpen });
      };

      const sideList = () => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {(loginStatus?SideBarMenu.LoggedIn:SideBarMenu.LoggedOut).map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

      return (
          <div>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
        className={clsx(classes.menuButton, state.isOpen && classes.hide)}
        ><MenuIcon /></IconButton>
        <SwipeableDrawer
        open={state.isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
      </div>
      )
}

export default Sidedrawer;