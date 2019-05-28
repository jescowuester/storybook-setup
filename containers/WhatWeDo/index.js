import React from 'react';

import { Section, Text, Flex, Card } from 'components';

const colWidth = ['100%', '100%', '50%'];

const index = ({ content: { title, card1, card2, card3, card4 } }) => (
  <Section p={['60px 40px', '60px 40px', '160px 130px 0']}>
    <Text mb="80px" as="h3">
      {title}
    </Text>
    <Flex flexDirection={['column', 'column', 'row']}>
      <Flex width={colWidth} flexDirection="column">
        <Card {...card1} />
        <Card {...card2} />
      </Flex>
      <Flex pt={['0', '0', '150px']} flexDirection="column" width={colWidth}>
        <Card {...card3} />
        <Card {...card4} />
      </Flex>
    </Flex>
  </Section>
);

export default index;
