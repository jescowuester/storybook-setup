import React from 'react';
import styled from 'styled-components';
import { space, color, width, fontSize } from 'styled-system';

const Button = styled.button`
  box-shadow: ${p => p.theme.shadows.z2};
  border-radius: 5px;
  border: 2px solid transparent;
  color: ${p => p.theme.colors.white};
  background: ${({ secondary, theme: { colors } }) =>
    secondary ? colors.redLight : colors.blueDark};
  transition: background 0.2s, box-shadow 0.2s;

  &:hover{
    background: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.redLighter : colors.blue};
  };

  &:disabled{
    background: ${p => p.theme.colors.grey};
  }

  &:active{
    box-shadow: ${p => p.theme.shadows.z1};
  }

  ${space}
  ${color}
  ${width}
  ${fontSize}
`;

Button.defaultProps = {
  py: '15px',
  px: '26px',
  fontSize: '20px'
};

export default Button;
