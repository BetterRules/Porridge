import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Inputs from './components/Inputs';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Eligibility from './components/Eligibility';

class App extends Component {
  render() {
    return (
      <Paper className="App">
        <Profile />
        <Inputs />
        <Eligibility status={true} />
        <Eligibility status={false} />
      </Paper>
    );
  }
}

export default App;
