/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ primary, secondary, theme: { colors } }) =>
    primary
      ? colors.blueDark
      : secondary
      ? colors.redLight
      : colors.greyLighter};
  color: #fff;
  font-size: ${({
    theme: {
      font: { sizes }
    }
  }) => sizes.h400};
  font-weight: ${({
    theme: {
      font: { weigths }
    }
  }) => weigths.medium};
  line-height: ${({
    theme: {
      font: { heights }
    }
  }) => heights.h600};
  padding: 0 24px;
  height: 60px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
  box-shadow: ${({ theme: { shadows } }) => shadows.z1};
  cursor: pointer;

  :hover {
    background: ${({ primary, secondary, theme: { colors } }) =>
      primary ? colors.blue : secondary ? colors.red : colors.greyLight};
  }
`;

export default Button;
