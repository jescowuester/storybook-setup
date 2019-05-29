import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { Box, Text, TextButton } from 'components';

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56%;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: center;
`;

const Card = ({ img, title, text, redirect, secondary, href }) => (
  <Box mb={['60px', '100px', '160px']} mx={['10px', '10px', '30px']}>
    <Img img={img} />
    <Box bg={secondary ? 'white' : 'greyLighter'} p={['20px', '30px', '50px']}>
      <Text mb="30px" as="h4">
        {title}
      </Text>
      <Text color="blackLight" mb="40px" fontSize="18px" as="p">
        {text}
      </Text>
      <Link href={href}>
        <TextButton as="a" secondary={secondary}>
          {redirect}
        </TextButton>
      </Link>
    </Box>
  </Box>
);

Card.defaultProps = {
  redirect: 'Learn more',
  secondary: false
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  secondary: PropTypes.bool
};

export default Card;
