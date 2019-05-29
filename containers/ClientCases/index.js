import React from 'react';
import styled from 'styled-components';

import { Text, Button, Flex, Box, Section } from 'components';

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 60%;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const Container = styled(props => <Flex {...props} />)`
  flex-wrap: wrap;
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
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 0;
  }
`;

const cardWidth = ['98%', '98%', '48%'];
const cardMargin = ['20px', '10px', '0'];

const ClientCases = ({ content: { card1, card2, card3, card4, button } }) => (
  <Section
    textAlign="center"
    p={['60px 40px', '60px 40px', '160px']}
    bg="greyLighter"
  >
    <Text mb="80px" as="h3">
      Client Cases.
    </Text>
    <Container justifyContent="space-between" width="100%">
      <Box mb={cardMargin} width={cardWidth}>
        <Img img={card1.img} />
        <Text as="h4">{card1.title}</Text>
        <Text as="p">{card1.text}</Text>
      </Box>
      <Box mb={cardMargin} width={cardWidth}>
        <Img img={card2.img} />
        <Text as="h4">{card2.title}</Text>
        <Text as="p">{card2.text}</Text>
      </Box>
    </Container>
    <Container justifyContent="space-between" width="100%">
      <Box mb={cardMargin} width={cardWidth}>
        <Img img={card3.img} />
        <Text as="h4">{card3.title}</Text>
        <Text as="p">{card3.text}</Text>
      </Box>
      <Box mb={cardMargin} width={cardWidth}>
        <Img img={card4.img} />
        <Text as="h4">{card4.title}</Text>
        <Text as="p">{card4.text}</Text>
      </Box>
    </Container>
    <Button>{button}</Button>
  </Section>
);

export default ClientCases;
