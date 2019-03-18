import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Eligibility from './components/Eligibility';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <Eligibility status={true} />
        <Eligibility status={false} />
      </div>
    );
  }
}

export default App;
