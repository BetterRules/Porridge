import React from 'react';
import './App.css';
import AccordionItem from './containers/Accordion-Item';
import Paper from '@material-ui/core/Paper';
import DATA from './openfisca/Data'

const App = () => {
  return (
    <Paper className="App">
      {DATA.map(example => {
        return (
        <AccordionItem
          key={example.firstName}
          person={example}
        />
      )}
      )}
    </Paper>
  );
}

export default App;
