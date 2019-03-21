import React, { useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

const Inputs = (props) => {
  const { person } = props

  const [state, setState] = useState({
    ...person
  });

  const handleTextChange = name => event => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleSwitchChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const Spacer = styled.div`
    margin: 0 2rem;
  `;

  return (
    <Fragment>
      <form className="Form-Date" noValidate autoComplete="off">
        <div className="Flex-Column">
          <TextField
            id="firstName"
            label="First Name"
            value= {person.firstName}
            onChange={handleTextChange('firstName')}
            margin="normal"
            className="Input-Date" // this should have a better classname
          />
          {importantDates.map(([id, label]) => {
            return (
              <TextField
                key={`${person.firstName}-${id}`}
                id={id}
                label={label}
                type="date"
                value={state[id]}
                margin="normal"
                className="Input-Date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )})}
          {changeableNumbers.map(([id, label]) => {
            return (
              <TextField
                key={`${id} - ${person.firstName}`}
                id={id}
                label={label}
                value={state[id]}
                onChange={handleTextChange(id)}
                type="number"
                className='Input-Date'
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            )})}
        </div>
        <Spacer>
          {changableBooleans.map(([id, label]) => {
            return (
              <div key={`${id} - ${person.firstName}`} className='Flex-Row'>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state[id]}
                      onChange={handleSwitchChange(id)}
                      value={id}
                      color="primary"
                    />
                  }
                  label={label}
                />
              </div>
            )})}
        </Spacer>
      </form>
    </Fragment>
  );
}

export default Inputs;

const importantDates = [
  ['date_of_birth', 'Date of Birth'],
  ['date_of_injury', 'Date of Injury'],
  ['finish_date_of_full_time_study_training_bridging_18th_birthday', 'End date of study bridging 18th birthday']// ['StartOfStudy', 'Start of full-time study or training'],
]

const changableBooleans = [
  ['acc__earner', 'Is Earner?'],
  ['acc__has_cover', 'Has Cover?'],
  ['acc_part_2__suffered_personal_injury', 'Suffered Injury?'],
  ['acc_part_3__has_lodged_claim', 'Lodged Claim?'],
  ['acc_sched_1__engaged_fulltime_study_or_training', 'Engaged Fulltime Study or Training'],
  ['acc_sched_1__incapacitated_for_6_months', 'Incapacitated at least 6 months'],
  ['incapacity_for_employment__corporation_determination', 'Incapicity for Employment'],
  ['incapacity_for_employment__by_covered_injury', 'Covered Injury'] //??
]

const changeableNumbers = [
  ['acc_sched_1__weekly_earnings', 'Weekly Earnings' ]
]
