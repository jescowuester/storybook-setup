import { Box, Text, Button } from "components";
import styled from "styled-components";

const Outer = styled.section`
  height: calc(100vh - 100px);
  display: flex;
`;

const Home = () => {
  return (
    <Outer>
      <Box height="100%" width="50%" bg="greyLighter" p="180px 160px">
        <Text mb="10px" as="h2">
          You are a
        </Text>
        <Text mb="20px" as="h1">
          Candidate
        </Text>
        <Text mb="50px" as="p">
          Don’t check for job opportunities yourself. We do that work for you,
          matching you with the best scale-ups worldwide. Are you ready?
        </Text>
        <Button secondary>Find opportunities here</Button>
      </Box>
      <Box
        height="100%"
        width="50%"
        bg="blackDark"
        color="white"
        p="180px 160px"
      >
        <Text mb="10px" as="h2">
          You are a
        </Text>
        <Text mb="20px" as="h1">
          Scale-up
        </Text>
        <Text mb="50px" as="p">
          We have an extremely large network. Built up from more than 20 years
          of experience. Let us find your next best new talents today.
        </Text>
        <Button>Find me the one.</Button>
      </Box>
    </Outer>
  );
};

export default Home;
