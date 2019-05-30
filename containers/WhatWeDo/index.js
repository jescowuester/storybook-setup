import React from 'react';

import { Section, Text, Flex, Card } from 'components';

const colWidth = ['100%', '100%', '50%'];

const index = ({ content: { title, card1, card2, card3, card4 } }) => (
  <Section p={['80px 40px', '80px 40px 0', '160px 160px 80px']}>
    <Text mb="80px" as="h3">
      {title}
    </Text>
    <Flex flexDirection={['column', 'column', 'row']} mx={['-10px', '-10px', '-30px']}>
      <Flex width={colWidth} flexDirection="column">
        <Card {...card1} />
        <Card {...card3} />
      </Flex>
      <Flex pt={['0', '0', '150px']} flexDirection="column" width={colWidth}>
        <Card {...card2} />
        <Card {...card4} />
      </Flex>
    </Flex>
  </Section>
);

export default index;
