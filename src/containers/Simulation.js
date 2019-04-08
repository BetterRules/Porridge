import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import Chart from '../components/Chart';
import DataSet from '../charts/Data';
import _ from 'lodash';

const Simulation = () => {

  const [age, setAge] = useState(18);

  return (
    <div>
      <Card>
        <div style={{padding:'1.5em'}}>
          <label>Select Age Group:
            <select onChange={e => setAge(e.target.value)} aria-label="Select age group">
              {_.range(22).map(item => item === 18 ? <option selected>{item}</option> : <option>{item}</option>)}
            </select>
          </label>
          <Chart data={DataSet} selectedAge={age} />
        </div>
      </Card>
    </div>
  );
}

export default Simulation;
