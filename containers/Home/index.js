import styled from "styled-components";

import { Box, Text, Button } from "components";

const Outer = styled.section`
  height: calc(100vh - 100px);
  display: flex;
`;

const Home = ({ content: { leftCol, rightCol } }) => (
  <Outer>
    <Box height="100%" width="50%" bg="greyLighter" p="180px 160px">
      <Text mb="10px" as="h2">
        {leftCol.tagLine}
      </Text>
      <Text mb="20px" as="h1">
        {leftCol.title}
      </Text>
      <Text mb="50px" as="p">
        {leftCol.text}
      </Text>
      <Button secondary>{leftCol.button}</Button>
    </Box>
    <Box
      height="100%"
      width="50%"
      bg="blackDark"
      color="white"
      p="180px 160px"
    >
      <Text mb="10px" as="h2">
        {rightCol.tagLine}
      </Text>
      <Text mb="20px" as="h1">
        {rightCol.title}
      </Text>
      <Text mb="50px" as="p">
        {rightCol.text}
      </Text>
      <Button>{rightCol.button}</Button>
    </Box>
  </Outer>
);

export default Home;
