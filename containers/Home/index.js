import React from 'react';
import styled from 'styled-components';
import { Box, Text, Button } from 'components';
import Link from 'next/link';

const Outer = styled.section`
  display: flex;
  min-height: calc(100vh - 100px);
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 100%;
  }
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    flex-direction: column;
    /* min-height: 100%; */
    min-height: calc(100vh - 60px);

    & > div {
      min-height: 420px;
      flex-basis: calc(50vh - 30px);
    }
  }
`;

const Home = ({ content: { leftCol, rightCol } }) => (
  <Outer>
    <Box
      minHeight={['50%', '50%', 'calc(100vh - 100px)']}
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
      minHeight={['50%', '50%', 'calc(100vh - 100px)']}
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
      <Link passHref href="/home">
        <Button as="a">{rightCol.button}</Button>
      </Link>
    </Box>
  </Outer>
);

export default Home;
