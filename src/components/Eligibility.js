import React from 'react';

import styled, { css } from 'styled-components';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const Wrapper = styled.div`
  svg {
    border: 1px solid #000;
    font-size: 36px;
  }
`;

const Eligibility = props => {
  return (
    <Wrapper>
      {props.eligible ? <CheckIcon /> : <ClearIcon />}
    </Wrapper>
  );
}

export default Eligibility;
