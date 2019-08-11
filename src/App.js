import React from 'react';
import Header from './Components/header'
import Bodycomp from './Components/body'
import Footer from './Components/footer'

import {Grid} from '@material-ui/core';

import './App.css';

function App() {
  return (
    <Grid
     container
     direction="column"
     spacing={3}
     justify="space-evenly"
     alignItems="stretch"
     height = '100vh'
    >
    <Grid item xs> <Header /></Grid>
    <Grid item xs>  <Bodycomp /></Grid>
    <Grid item xs>  <Bodycomp /></Grid>
    <Grid item xs>  <Bodycomp /></Grid>
    <Grid item xs> <Footer /></Grid>
     </Grid>
     );
}

export default App;
