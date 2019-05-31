import React from 'react';

import { Box, Section, Text, Flex, Card } from 'components';

const colWidth = ['100%', '100%', '50%'];

const index = ({ content: { title, card1, card2, card3, card4 } }) => (
  <Section p={['50px 14px 0', '80px 40px 0', '160px 160px 80px']}>
    <Text mb={['30px', '40px', '80px']} as="h3">
      {title}
    </Text>
    <Flex
      flexDirection={['column', 'column', 'row']}
      mx={['-10px', '-10px', '-30px']}
    >
      <Flex width={colWidth} flexDirection="column">
        {[card1, card2, card3, card4].map(onCard => (
          <Box mb={['16px', '80px', '80px']} mx={['10px', '10px', '30px']}>
            <Card {...onCard} noFlex />
          </Box>
        ))}
      </Flex>
    </Flex>
  </Section>
);

export default index;
