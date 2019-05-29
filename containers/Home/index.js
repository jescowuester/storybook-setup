import React from 'react';
import styled from 'styled-components';
import { Box, Text, Button } from 'components';
import Link from 'next/link';

const Outer = styled.section`
  display: flex;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 100%;
  }
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    flex-direction: column;
    /* min-height: 100%; */

    & > div {
      min-height: 420px;
    }
  }
`;

const Home = ({ content: { leftCol, rightCol } }) => (
  <Outer>
    <Box
      height={['50%', '50%', '100%']}
      width={['100%', '100%', '50%']}
      bg="greyLighter"
      p={['40px', '40px', '180px 160px']}
    >
      <Text mb="10px" as="h2">
        {leftCol.tagLine}
      </Text>
      <Text mb="20px" as="h1">
        {leftCol.title}
      </Text>
      <Text mb={['20px', '20px', '50px']} as="p">
        {leftCol.text}
      </Text>
      <Button as="a" href="https://careers.oneworks.co" secondary>
        {leftCol.button}
      </Button>
    </Box>
    <Box
      height={['50%', '50%', '100%']}
      width={['100%', '100%', '50%']}
      bg="blackDark"
      color="white"
      p={['40px', '40px', '180px 160px']}
    >
      <Text mb="10px" as="h2">
        {rightCol.tagLine}
      </Text>
      <Text mb="20px" as="h1">
        {rightCol.title}
      </Text>
      <Text mb={['20px', '20px', '50px']} as="p">
        {rightCol.text}
      </Text>
      <Link href="/home">
        <Button as="a">{rightCol.button}</Button>
      </Link>
    </Box>
  </Outer>
);

export default Home;
