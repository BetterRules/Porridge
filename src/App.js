import React from 'react';
import './App.css';
import AccordionItem from './containers/Accordion-Item';
import Simulation from './containers/Simulation';
import Paper from '@material-ui/core/Paper';
import DATA from './openfisca/Data'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class App extends React.Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Paper className="App">
        <h1>Policy Development Simulator</h1>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Charts" />
            <Tab label="Tests" />
          </Tabs>
        </AppBar>
        {value === 0 && <Simulation />}
        {value === 1 && <div style={{marginTop: '2em'}}>
          {DATA.map(example => {
            return (
              <AccordionItem
                key={example.firstName}
                person={example}
              />
            )}
          )}
        </div>}
      </Paper>
    );
  }
}

export default App;
