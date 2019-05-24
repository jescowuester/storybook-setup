/* eslint-disable no-eval */
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${({ color, theme: { colors } }) =>
    colors[color] || colors.greyLighter};
  color: #fff;
  font-size: ${({
    theme: {
      font: { sizes }
    }
  }) => sizes.h400};
  font-weight: ${({
    theme: {
      font: { weights }
    }
  }) => weights.medium};
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
    background: ${({ hoverColor, theme: { colors } }) =>
      hoverColor ? eval(`colors.${hoverColor}`) : colors.greyLight};
  }
`;

export { StyledButton };
