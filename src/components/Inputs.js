import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const importantDates = [
  ['DateOfBirth', 'Date of Birth'],
  ['DateOfInjury', 'Date of Injury'], 
  ['StartOfStudy', 'Start of full-time study or training'],
]

const Inputs = (props) => {
  const { person, inputs } = props
  const [name, setName] = useState(person.firstName);
  
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
      {importantDates.map(([id, label]) => {
        return (
        <TextField
          key={`${name}-${id}`}
          id={id}
          label={label}
          type="date"
          defaultValue={inputs[id]}
          variant="filled"
          margin="normal"
          className="Input-Date"
          InputLabelProps={{
          shrink: true,
          }}
        />
      )})}
    </form>            
  );
}

export default Inputs;