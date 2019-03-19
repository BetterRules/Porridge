import React from 'react';
import './App.css';
import AccordionItem from './containers/Accordion-Item';
import Paper from '@material-ui/core/Paper';

const examples = [
  {
    person: {
      firstName: 'Freddy',
      lastName: 'Mercury'
    },
    inputs: {
      DateOfBirth: '1998-11-11',
      DateOfInjury:'2005-04-04', 
      StartOfStudy: '2007-07-07'
    }
  },
  {
    person: {
      firstName: 'Taika',
      lastName: 'Waititi'
    },
    inputs: {
      DateOfBirth: '1998-11-11',
      DateOfInjury:'2005-04-04', 
      StartOfStudy: '2007-07-07'
    }
  },
  {
    person: {
      firstName: 'Greta',
      lastName: 'Thunberg'
    },
    inputs: {
      DateOfBirth: '1998-11-11',
      DateOfInjury:'2005-04-04', 
      StartOfStudy: '2007-07-07'
    }
  }

]
const App = () => {
  return (
    <Paper className="App">
      {examples.map(example => (
        <AccordionItem key={example.person.firstName} person={example.person} inputs={example.inputs}/>
      ))}
    </Paper>
  );
}

export default App;
