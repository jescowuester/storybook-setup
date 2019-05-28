import React from 'react';

import { Section, Text, Flex, Card } from 'components';

const index = ({ content: { title, card1, card2, card3, card4 } }) => (
  <Section p="160px 130px 0">
    <Text mb="80px" as="h3">
      {title}
    </Text>
    <Flex>
      <Flex width="50%" flexDirection="column">
        <Card {...card1} />
        <Card {...card2} />
      </Flex>
      <Flex pt="150px" flexDirection="column" width="50%">
        <Card {...card3} />
        <Card {...card4} />
      </Flex>
    </Flex>
  </Section>
);

export default index;
