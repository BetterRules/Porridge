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
        <div className="spacer">
          <label>Select Age Group:
            <select defaultValue="18" onChange={e => setAge(e.target.value)} aria-label="Select age group">
              {_.range(22).map(item => <option key={`${item}_option`}>{item}</option>)}
            </select>
          </label>
          <Chart data={DataSet} selectedAge={age} />
        </div>
      </Card>
    </div>
  );
}

export default Simulation;
