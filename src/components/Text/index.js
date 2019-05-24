import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledText,
  H1Text,
  H2Text,
  H3Text,
  H4Text,
  H5Text,
  H6Text
} from './style';

const propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.node
};

const defaultProps = {
  color: '',
  fontSize: '',
  children: <></>
};

const secondaryTextProps = {
  fontSize: PropTypes.string,
  children: PropTypes.node
};

const secondaryTextDefaultProps = {
  fontSize: '',
  children: <></>
};

const headerProps = {
  xl: PropTypes.bool,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool
};

const defaultHeaderProps = {
  xl: false,
  lg: false,
  md: false,
  sm: false,
  xs: false
};

const Text = props => <StyledText {...props} />;
const SecondaryText = props => <StyledText color="blackDark" {...props} />;

const Header = props => {
  const { xl, lg, md, sm, xs } = props;

  if (xl) {
    return <H1Text {...props} />;
  }

  if (lg) {
    return <H2Text {...props} />;
  }

  if (md) {
    return <H3Text {...props} />;
  }

  if (sm) {
    return <H4Text {...props} />;
  }

  if (xs) {
    return <H5Text {...props} />;
  }

  return <H6Text {...props} />;
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
SecondaryText.propTypes = secondaryTextProps;
SecondaryText.defaultProps = secondaryTextDefaultProps;
Header.propTypes = { ...propTypes, ...headerProps };
Header.defaulProps = { ...defaultProps, ...defaultHeaderProps };

export { Text, SecondaryText, Header };
