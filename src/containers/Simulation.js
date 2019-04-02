import React, { useState, useEffect } from 'react'

import Card from '@material-ui/core/Card';
import Chart from '../components/Chart';

const Simulation = (props) => {
  const { person } = props
  //const [currentPerson, updatePerson] = useState(person)
  //const [eligible, setIsEligible] = useState(null);

  useEffect(() => {
    //function handleEligibility(res) {
    //  setIsEligible(res.acc_sched_1__lope_eligible)
    //}
    //if(eligible == null) QueryOF(currentPerson, handleEligibility)
  });



  return (
    <div>
        <Card>
            <div style={{padding:'1.5em'}}>
                <h2>Policy Development Simulator</h2>
                <h3>Sensitive Claims</h3>
                <Chart />
                <h3>Birth Injuries</h3>
                <Chart />
                <h3>High level spinal</h3>
                <Chart />
                <h3>Knee Injury</h3>
                <Chart />
                <h3>Severe Burns</h3>
                <Chart />
            </div>
        </Card>
    </div>
  );
}

export default Simulation;
