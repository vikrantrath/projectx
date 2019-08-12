import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/icons/Link';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  indicator: {
    backgroundColor: 'green',
  },
  text:{
    backgroundColor: 'green',
  }
});

const Footer = (props)=>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
    return (<AppBar position = 'static'>
    <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="icon label tabs example"
        textColor = "inherit"
        classes={{
          indicator: classes.indicator,
          text : classes.text
        }}
      >
        <Tab icon={<PhoneIcon />} label="CONTACT US" />
        <Tab icon={<FavoriteIcon />} label="Visit Us on SMS" />
        <Tab icon={<Link />} label="QuickLinks" />
      </Tabs>
    </AppBar>
     )
}

export default Footer;