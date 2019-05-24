import { Section, Box, Text, Flex, Button, Redirect } from "components";
import styled from "styled-components";

const Img = styled.div`
  min-width: 45%;
  height: 680px;
  background: url(/static/placeholder.jpg) no-repeat center;
  background-size: cover;
`;

const HiringEasy = () => {
  return (
    <Section bg="greyLighter">
      <Flex>
        <Box p="100px 160px 100px 190px">
          <Text mb="30px" as="h1">
            Want to make hiring easy?
          </Text>
          <Text mb="50px" as="p">
            We have an extremely large network. Built up from more than 20 years
            of experience. Let us find your next best new talents today.
          </Text>
          <Button>Book a call</Button>
          <Redirect ml="30px">Download our pitch</Redirect>
        </Box>
        <Img />
      </Flex>
    </Section>
  );
};

export default HiringEasy;
