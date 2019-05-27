import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Box, Text, TextButton } from 'components';

const Img = styled.div`
  width: 50%;
  height: 100%;

  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const Card = ({ src, title, text, redirect, secondary }) => (
  <Flex mb="160px" mx="30px">
    <Img src={src} />
    <Box bg={secondary ? 'white' : 'greyLighter'} p="50px">
      <Text mb="30px" as="h4">
        {title}
      </Text>
      <Text mb="40px" fontSize="18px" as="p">
        {text}
      </Text>
      <TextButton secondary={secondary}>{redirect}</TextButton>
    </Box>
  </Flex>
);

Card.defaultProps = {
  redirect: 'Learn more',
  secondary: false
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  secondary: PropTypes.bool
};

export default Card;
