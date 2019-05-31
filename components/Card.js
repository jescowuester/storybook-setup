import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';
import Text from './Text';
import TextButton from './TextButton';

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56%;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: center;
`;

const StyledBox = styled(Box)`
  border-radius: 5px;
  overflow: hidden;
  display: block;
  height: ${p => (p.noFlex ? 'auto' : '100%')};
  display: flex;
  flex-flow: column nowrap;

  // :last-child {
  //   margin-bottom: 0;
  // }
`;

const Card = ({ img, title, text, redirect, secondary, href, noFlex }) => (
  <StyledBox as="a" href={href} minHeight="100%" noFlex={noFlex}>
    <Img img={img} />
    <Box
      flex={noFlex ? false : '1 1 auto'}
      bg={secondary ? 'white' : 'greyLighter'}
      p={['20px', '30px', '50px']}
    >
      <Text mb={['20px', '30px']} as="h4">
        {title}
      </Text>
      <Text
        color="blackLight"
        mb={['20px', '30px', '40px']}
        fontSize={['16px', '18px']}
        as="p"
      >
        {text}
      </Text>
      <TextButton noLink secondary={secondary}>
        {redirect}
      </TextButton>
    </Box>
  </StyledBox>
);

Card.defaultProps = {
  redirect: 'Learn more',
  secondary: false,
  href: '/',
  noFlex: false
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  secondary: PropTypes.bool,
  href: PropTypes.string,
  noFlex: PropTypes.bool
};

export default Card;
