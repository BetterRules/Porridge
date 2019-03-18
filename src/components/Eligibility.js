import React from 'react';

import styled from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const Wrapper = styled.div`
  border: 1px solid #000;
  padding: 1rem;
  width: 1.5625rem;

  svg {
    font-size: 26px;
  }
`;

const Eligibility = props => {
  return (
    <Wrapper>
      {props.status ? <CheckIcon /> : <ClearIcon />}
    </Wrapper>
  );
}

export default Eligibility;
