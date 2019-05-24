import { Text, Button, Flex, Box, Section } from "components";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 60%;
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const Container = styled(Flex)`
  margin-bottom: 80px;
  text-align: left;
  h4 {
    margin: 20px 0 10px 0;
    font-size: 24px;
  }
  p {
    color: ${p => p.theme.colors.blackLight};
    font-size: 18px;
  }
`;

const ClientCases = () => {
  return (
    <Section textAlign="center" p="160px" bg="greyLighter">
      <Text mb="80px" as="h3">
        Client Cases.
      </Text>
      <Container justifyContent="space-between" width="100%">
        <Box width="48%">
          <Img src="/static/placeholder.jpg" />
          <Text as="h4">Impraise</Text>
          <Text as="p">Kudos from Impraise!</Text>
        </Box>
        <Box width="48%">
          <Img src="/static/placeholder.jpg" />
          <Text as="h4">Impraise</Text>
          <Text as="p">Kudos from Impraise!</Text>
        </Box>
      </Container>
      <Container justifyContent="space-between" width="100%">
        <Box width="48%">
          <Img src="/static/placeholder.jpg" />
          <Text as="h4">Impraise</Text>
          <Text as="p">Kudos from Impraise!</Text>
        </Box>
        <Box width="48%">
          <Img src="/static/placeholder.jpg" />
          <Text as="h4">Impraise</Text>
          <Text as="p">Kudos from Impraise!</Text>
        </Box>
      </Container>
      <Button>Read more</Button>
    </Section>
  );
};

export default ClientCases;
