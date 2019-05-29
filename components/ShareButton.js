import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';
import Icon from './Icon';

const Outer = styled.button`
  background: ${p => p.theme.colors.greyLighter};
  border-radius: 200px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${p => p.theme.colors.greyLight};
  }
  transition: background 0.1s;
  ${space}
`;

const ShareButton = ({ icon, ...props }) => {
  return (
    <Outer {...props}>
      <Icon fontSize="20px" color="redLight" icon={icon} />
    </Outer>
  );
};

ShareButton.propTypes = {
  icon: PropTypes.array.isRequired
};

export default ShareButton;
