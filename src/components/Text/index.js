import React from 'react';
import styled from 'styled-components';
import { H1, P } from '../Typography';

const StyledText = styled(P)``;
const HeaderText = styled(H1)``;

const Text = ({ type, children }) => {
  if (type === 'h1') {
    return <HeaderText>{children}</HeaderText>;
  }

  return <StyledText>{children}</StyledText>;
};

export default Text;
