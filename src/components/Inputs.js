import React, { useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash'

const importantDates = [
  ['date_of_birth', 'Date of Birth'],
  ['date_of_injury', 'Date of Injury'], 
  // ['StartOfStudy', 'Start of full-time study or training'],
]

const Inputs = (props) => {
  const { person } = props
  const [name, setName] = useState(person.firstName);
  
  const handleChange = name => event => {
    setName(event.target.value)
  };
  
  return (
    <Fragment>
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
            defaultValue={Object.keys(person[id])[0]}
            variant="filled"
            margin="normal"
            className="Input-Date"
            InputLabelProps={{
            shrink: true,
            }}
          />
        )})}
      </form>
      <div>
        {_.map(person, (key, value) => {
        console.log(value, key)
        }
         )}
      </div>
    </Fragment>
  );
}

export default Inputs;