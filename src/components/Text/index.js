import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H1, H2, H3, H4, H5, H6, P } from '../Typography';

const propTypes = {
  type: PropTypes.string,
  secondary: PropTypes.bool
};

const defaultProps = {
  type: '',
  secondary: false
};

const StyledText = styled(P)`
  color: ${({ secondary, theme: { colors } }) =>
    secondary ? colors.blackDark : colors.blackLight};
`;
const H1Text = styled(H1)`
  color: ${({ theme: { colors } }) => colors.blackDarker};
`;
const H2Text = styled(H2)`
  color: ${({ theme: { colors } }) => colors.blackDarker};
`;
const H3Text = styled(H3)`
  color: ${({ theme: { colors } }) => colors.blackDarker};
`;
const H4Text = styled(H4)`
  color: ${({ theme: { colors } }) => colors.blackDarker};
`;
const H5Text = styled(H5)`
  color: ${({ theme: { colors } }) => colors.blackDarker};
`;
const H6Text = styled(H6)`
  color: ${({ theme: { colors } }) => colors.blackDarker};
`;

const Text = ({ secondary, type, children }) => {
  if (type === 'h1') {
    return <H1Text>{children}</H1Text>;
  }

  if (type === 'h2') {
    return <H2Text>{children}</H2Text>;
  }

  if (type === 'h3') {
    return <H3Text>{children}</H3Text>;
  }

  if (type === 'h4') {
    return <H4Text>{children}</H4Text>;
  }

  if (type === 'h5') {
    return <H5Text>{children}</H5Text>;
  }

  if (type === 'h6') {
    return <H6Text>{children}</H6Text>;
  }

  return <StyledText secondary={secondary}>{children}</StyledText>;
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
