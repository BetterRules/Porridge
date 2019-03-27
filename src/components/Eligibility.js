import React from 'react';

import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const Wrapper = styled.div`
  div {
    margin-top: .4rem;
    font-size: 36px;
  };
  svg {
    border: 1px solid #000;
    font-size: 36px;
  }
`;

const Eligibility = props => {
  const { eligible } = props 
  if (!eligible)  return null
  const keys = Object.keys(eligible)
  return (
    <Wrapper>
      {keys.map(key => {
        const eligibleOnDay = eligible[key] ? (<CheckIcon />) : <ClearIcon />
        return (
        <div key={key}> {key} : {eligibleOnDay} </div>
        )
      })}
    </Wrapper>
  );
}

export default Eligibility;
