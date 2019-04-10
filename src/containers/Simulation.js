import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import Chart from '../components/Chart';
import { DataSet, BirthBrainInjury, HighLevelSpinalInjury, KneeInjury, SeriousBurnsInjury } from '../charts/Data';
import _ from 'lodash';

const Simulation = () => {

  const [age, setAge] = useState(16);

  return (
    <div>
      <Card>
        <div className="spacer">
          <label>Select Age Group:
            <select defaultValue="16" onChange={e => setAge(e.target.value)} aria-label="Select age group">
              {_.range(22).map(item => <option key={`${item}_option`}>{item}</option>)}
            </select>
          </label>
          <h2>Sensitive Claims</h2>
          <Chart data={DataSet} selectedAge={age} />
          <h2>Birth Injuries</h2>
          <Chart data={BirthBrainInjury} selectedAge={age} />
          <h2>High level spinal</h2>
          <Chart data={HighLevelSpinalInjury} selectedAge={age} />
          <h2>Knee Injury</h2>
          <Chart data={KneeInjury} selectedAge={age} />
          <h2>Severe Burns</h2>
          <Chart data={SeriousBurnsInjury} selectedAge={age} />
        </div>
      </Card>
    </div>
  );
}

export default Simulation;
