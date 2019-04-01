import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Outputs from './Outputs'

const Inputs = (props) => {
  const { person, handleChange, eligible, weeklyCompensation } = props

  return (
    <Fragment>
      <form className='Flex-Row' noValidate autoComplete="off">
        <div className='Spacer'>
        <TextField
            id="firstName"
            label="First Name"
            value= {person.firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            className="Input-Date" // this should have a better classname
        />
        <TextField
            id="lastName"
            label="Last Name"
            value= {person.lastName}
            onChange={handleChange("firstName")}
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            className="Input-Date" // this should have a better classname
        />
        {importantDates.map(([id, label]) => {
          return person[id].map(([date, value]) => {
            return (
              <TextField
                key={`${person.firstName}-${id}-${date}`}
                id={`${id}-${date}`}
                label={label}
                type="date"
                defaultValue={value}
                onChange={handleChange(id)}
                margin="normal"
                className="Input-Date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )
          })
        })}
        {changeableNumbers.map(([id, label]) => {
          return person[id].map(([date, value]) => {
            return (
              <TextField
                key={`${id} - ${date} - ${person.firstName}`}
                id={id}
                label={label}
                value={value}
                onChange={handleChange(id, date)}
                type="number"
                className='Input-Date'
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
              )
          })
        })}
        </div>
        <Outputs
          eligible={eligible}
          weeklyCompensation={weeklyCompensation}
        />
        <div className='Spacer'>
        {changableBooleans.map(([id, label]) => {
            return person[id].map(([date, value]) => {
              return (
                <div key={`${date} - ${person.firstName}`} className='Flex-Column'>
                  <FormControlLabel
                  label={label}
                  control={
                    <Switch
                      checked={value}
                      onChange={handleChange(id, date)}
                      value={value}
                      color="primary"
                    />
                  }
                />
              </div>
            )})
          })}
        </div>
        <div className='Spacer'>
          {changableBooleansWithDates.map(([id, label]) => {
            return person[id].map(([date, value]) => {
              return (
                <div key={`${id} - ${date} - ${person.firstName}`} className='Flex-Column'>
                  <FormControlLabel
                    label={label}
                    control={
                      <Switch
                        checked={value}
                        onChange={handleChange(id, date)}
                        value={value}
                        color="primary"
                      />
                    }
                  />
                  { value
                    ? <TextField
                      key={`${person.firstName}-${id}-${date}`}
                      id={`${id}-${date}`}
                      type="date"
                      value={date}
                      onChange={handleChange(id, date, value, true)}
                      margin="normal"
                      className="Input-Date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    : null
                  }
                </div>
              )})
          })}
        </div>
        <div className='Spacer'>
          {Object.values(changableBooleansWithBoolean).map(item=> {
            return person[item.id].map(([date, value]) => {

              return (
                <Fragment>
                  <FormControlLabel
                    label={item.label}
                    control={
                      <Switch
                        checked={value}
                        onChange={handleChange(item.id, date)}
                        value={value}
                        color="primary"
                      />
                    }
                  />
                  {value && <FormControlLabel
                    label={item.toggled.label}
                    control={
                      <Switch
                        checked={value && null}
                        onChange={handleChange(item.toggled.id, date)}
                        value={value && null}
                        color="primary"
                      />
                    }
                  />}
                </Fragment>
              );

            })})}
        </div>
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

const changableBooleansWithDates = [
  ['acc__has_cover', 'Has Cover?'],
  ['acc_sched_1__engaged_fulltime_study_or_training', 'Engaged Fulltime Study or Training'],
  ['incapacity_for_employment__corporation_determination', 'ACC determination of incapacity'],
]

// const changableBooleansWithBoolean = [
//   ['acc__earner', 'Is EARNER at date of Injury?'],
//   // ['acc_sched_1__loe_more_than_lope', 'Entitled to Higher LOE']
// ]
const changableBooleansWithBoolean = {
  acc_earner: {
    label: 'Is EARNER at date of Injury?',
    id: 'acc__earner',
    toggled: {
      label: 'Entitled to Higher LOE',
      id: 'acc_sched_1__loe_more_than_lope'
    }
  }
}

const changableBooleans = [
  // ['acc_sched_1__loe_more_than_lope', 'Entitled to Higher LOE'],
  // ['acc__earner', 'Is EARNER at date of Injury?'],
  ['acc_part_2__suffered_personal_injury', 'Suffered Injury?'],
  ['acc_part_3__has_lodged_claim', 'Lodged Claim?'],
  ['acc_sched_1__incapacitated_for_6_months', 'Incapacitated at least 6 months'],
  ['incapacity_for_employment__by_covered_injury', 'Covered Injury'] //??

]

const changeableNumbers = [
  ['acc_sched_1__weekly_earnings', 'Weekly Earnings' ]
]
