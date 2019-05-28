import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Flex, Box, Text, TextButton } from 'components';

const Img = styled.div`
  min-width: 50%;
  min-height: 600px;
  background: url(${p => p.img}) no-repeat center;
  background-size: cover;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    height: 0;
    padding-top: 56%;
  }
`;

const TextSection = styled.div`
  font-size: 18px;
  color: ${p => p.theme.colors.blackLight};
  p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;

const CardLarge = ({ img, title, text, redirect, secondary, reverse }) => {
  const flexDirection = ['column', 'column', reverse ? 'row-reverse' : 'row'];

  return (
    <Flex
      width={['100%', '100%', 'auto']}
      flexDirection={flexDirection}
      mb={['40px', '40px', '160px']}
      mx={[0, 0, '30px']}
    >
      <Img img={img} />
      <Box
        bg={secondary ? 'greyLighter' : 'white'}
        p={['50px 40px', '50px 40px', '100px 80px']}
      >
        <Text mb="40px" as="h4">
          {title}
        </Text>
        <TextSection dangerouslySetInnerHTML={{ __html: text }} />
        <TextButton secondary={secondary}>{redirect}</TextButton>
      </Box>
    </Flex>
  );
};

CardLarge.defaultProps = {
  redirect: 'Learn more',
  secondary: false,
  reverse: false
};

CardLarge.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  redirect: PropTypes.string,
  secondary: PropTypes.bool,
  reverse: PropTypes.bool
};

export default CardLarge;
