import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import { space } from 'styled-system';

const StyledButton = styled.button`
  position: relative;
  padding: 14px 20px;
  box-shadow: 0px 2px 15px 0px rgba(215, 43, 71, 0.6);
  color: ${p => (p.secondary ? p.theme.colors.red : p.theme.colors.white)};
  font-weight: 700;
  border-radius: 4px;
  outline: none;
  background: ${p => (p.secondary ? p.theme.colors.white : p.theme.colors.red)};
  &:hover {
    box-shadow: 0px 2px 10px 0px rgba(215, 43, 71, 0.5);
    background: ${p =>
      p.secondary ? p.theme.colors.white : p.theme.colors.redDark};
  }

  transition: box-shadow 0.2s, background 0.2s;
  &:focus {
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border: 1px dotted ${p => p.theme.colors.white};
      border-radius: 5px;
    }
  }
  &:active {
    box-shadow: 0px 2px 2px 0px rgba(215, 43, 71, 0.3);
    transition: box-shadow 0.05s;
  }

  ${space}
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
