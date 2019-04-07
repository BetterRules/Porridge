import React from 'react';
import Eligibility from '../components/Eligibility'
import WeeklyCompensation from '../components/WeeklyCompensation';

const Outputs = (props) => {
  const { eligible, weeklyCompensation } = props
  return (
    <div className='Spacer'>
      <div className='Flex-Row'>
        <Eligibility eligible={eligible} />
        <WeeklyCompensation weeklyCompensation={weeklyCompensation} />
      </div>
    </div>
  );
}

export default Outputs;
