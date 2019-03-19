import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const importantDates = [
  'Date of Birth',
  'Date of Injury', 
  'Start of full-time study or training',
]

const Inputs = () => {
  const [name, setName] = useState('Onyx');
  
  const handleChange = name => event => {
    setName(event.target.value)
  };
  
  return (
    <form className="Form-Date" noValidate autoComplete="off">
      <TextField
          id="name"
          label="Name"
          value= {name}
          onChange={handleChange("name")}
          margin="normal"
          variant="filled"
          className="Input-Date"
      />
      {importantDates.map(label => (
        <TextField
          id={label}
          label={label}
          type="date"
          variant="filled"
          margin="normal"
          className="Input-Date"
          InputLabelProps={{
          shrink: true,
          }}
        />
      ))}
    </form>            
  );
}

export default Inputs;