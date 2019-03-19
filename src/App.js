import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Inputs from './components/Inputs';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <Paper className="App">
        <Profile />
        <Inputs />
      </Paper>
    );
  }
}

export default App;
