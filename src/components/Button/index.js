/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool
};

const defaultProps = {
  primary: false,
  secondary: false
};

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
    background: ${({ primary, secondary, theme: { colors } }) =>
      primary ? colors.blue : secondary ? colors.red : colors.greyLight};
  }
`;

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
