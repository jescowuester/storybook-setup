import React from 'react';
import { Section, Box, Text, Flex, Button, TextButton } from 'components';
import styled from 'styled-components';

const Img = styled.div`
  min-width: 45%;
  height: 680px;
  background: url(${p => p.src}) no-repeat center;
  background-size: cover;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`;

const HiringEasy = ({ content: { img, title, text, button } }) => {
  return (
    <Section bg="greyLighter">
      <Flex>
        <Box p={['60px 40px', '60px 40px', '100px 160px 100px 190px']}>
          <Text mb="30px" as="h1">
            {title}
          </Text>
          <Text mb="50px" as="p">
            {text}
          </Text>
          <Button>{button}</Button>
          <TextButton ml="30px">Download our pitch</TextButton>
        </Box>
        <Img src={img} />
      </Flex>
    </Section>
  );
};

export default HiringEasy;
