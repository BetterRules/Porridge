import React from 'react';
import './App.css';
import AccordionItem from './containers/Accordion-Item';
import Simulation from './containers/Simulation';
import Paper from '@material-ui/core/Paper';
import DATA from './openfisca/Data'

const App = () => {
  return (
    <Paper className="App">
      <Simulation />
      <div style={{marginTop: '2em'}}>
      {DATA.map(example => {
        return (
        <AccordionItem
          key={example.firstName}
          person={example}
        />
      )}
      )}
      </div>
    </Paper>
  );
}

export default App;
