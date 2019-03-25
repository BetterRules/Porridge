import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 1.5rem;
  div {
    margin-top: .4rem;
    font-size: 36px;
    height: 37px
  }
`;

const WeeklyCompensation = props => {
  let { weeklyCompensation } = props 
  
  if (!weeklyCompensation)  weeklyCompensation = []
  const WeeklyCompensationKeys = Object.keys(weeklyCompensation)

  return (
    <Wrapper>
      { WeeklyCompensationKeys.map(key => {
        const weeklyCompByYear = weeklyCompensation[key]
        return (
        <div key={key}> {weeklyCompByYear} </div>
        )
      })}
    </Wrapper>
    );
}

export default WeeklyCompensation;

