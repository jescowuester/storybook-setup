import { Section, Text, Redirect, Box, Flex } from "components";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56%;
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const Card = ({ src, title, text }) => (
  <Box mb="160px" mx="30px">
    <Img src={src} />
    <Box bg="greyLighter" p="50px">
      <Text mb="30px" as="h4">
        {title}
      </Text>
      <Text mb="40px" fontSize="18px" as="p">
        {text}
      </Text>
      <Redirect>Learn more</Redirect>
    </Box>
  </Box>
);

const index = () => {
  return (
    <Section p="160px 130px 0">
      <Text mb="80px" as="h3">
        What we do.
      </Text>
      <Flex>
        <Flex width="50%" flexDirection="column">
          <Card
            src="/static/placeholder.jpg"
            title="Recruitment"
            text="From a single key hire to multiple key hires. At One we can help
          you to allocate and attract these ‘had to find’ people. We’ve
          done it over a thousand times."
          />
          <Card
            src="/static/placeholder.jpg"
            title="Recruitment"
            text="From a single key hire to multiple key hires. At One we can help
          you to allocate and attract these ‘had to find’ people. We’ve
          done it over a thousand times."
          />
        </Flex>
        <Flex pt="150px" flexDirection="column" width="50%">
          <Card
            src="/static/placeholder.jpg"
            title="Recruitment"
            text="From a single key hire to multiple key hires. At One we can help
          you to allocate and attract these ‘had to find’ people. We’ve
          done it over a thousand times."
          />
          <Card
            src="/static/placeholder.jpg"
            title="Recruitment"
            text="From a single key hire to multiple key hires. At One we can help
          you to allocate and attract these ‘had to find’ people. We’ve
          done it over a thousand times."
          />
        </Flex>
      </Flex>
    </Section>
  );
};

export default index;
