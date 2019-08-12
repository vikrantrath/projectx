import React from 'react';
import Header from './Components/header'
import Bodycomp from './Components/body'
import Footer from './Components/footer'

import {Grid} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


import './App.css';
const useStyles = makeStyles({
  footer:{
    paddingTop : "12px",
    paddingLeft : "12px",
    paddingRight: "12px",
  }
})
function App() {
  const classes = useStyles();
  return (
    <Grid
     container
     direction="column"
     spacing={3}
     justify="space-evenly"
     alignItems="stretch"
    >
    <Grid item xs> <Header /></Grid>
    <Grid item xs>  <Bodycomp /></Grid>
    <Grid item xs>  <Bodycomp /></Grid>
    <Grid item xs>  <Bodycomp /></Grid>
    <Grid className = {classes.footer}> <Footer /></Grid>
     </Grid>
     );
}

export default App;
