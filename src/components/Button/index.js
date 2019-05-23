/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {
  children: <></>
};

const PrimaryButton = props => (
  <StyledButton color="blueDark" hoverColor="blue" {...props} />
);
const SecondaryButton = props => (
  <StyledButton color="redLight" hoverColor="red" {...props} />
);

PrimaryButton.propTypes = propTypes;
PrimaryButton.defaultProps = defaultProps;
SecondaryButton.propTypes = propTypes;
SecondaryButton.defaultProps = defaultProps;

export { PrimaryButton, SecondaryButton };
