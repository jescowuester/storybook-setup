import React from 'react';
import PropTypes from 'prop-types';
import { StyledText, H1Text } from './style';

const propTypes = {
  color: PropTypes.string,
  children: PropTypes.node
};

const defaultProps = {
  color: '',
  children: <></>
};

const Text = props => <StyledText {...props} />;
const SecondaryText = props => <StyledText color="blackDark" {...props} />;
const Header = props => <H1Text {...props} />;

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export { Text, SecondaryText, Header };
