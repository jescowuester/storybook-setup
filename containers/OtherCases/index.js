import { Card, Flex, Box, Section } from 'components';
import React from 'react';

const content = {
  cards: [
    {
      img: '/static/client-cases1.jpg',
      title: 'Kudos from Impraise! Growing their people.',
      text:
        'Impraise were one of our early adopters, they’re a scale up working in the HR tech space and are making some productive and innovative changes. As a fun team of dedicated innovators ...',
      secondary: true,
      href: '/cases/impraise'
    },
    {
      img: '/static/client-cases3.jpg',
      title: 'Adding some key-hires to a company in transition.',
      text:
        'Talmundo is a European HR Tech company founded in 2012 out of a growing frustration around HR information systems. Stijn, the CEO, was tired of the tools he tried to implement ...',
      secondary: true,
      href: '/cases/talmundo'
    }
  ]
};

const OtherCases = () => {
  return (
    <Section bg="greyLighter" p={['50px 40px', '50px 80px', '100px 160px']}>
      <Flex flexWrap="wrap">
        {content.cards.map(props => (
          <Box key={props.title} flexBasis={['100%', '50%', '50%']}>
            <Card {...props} />
          </Box>
        ))}
      </Flex>
    </Section>
  );
};

export default OtherCases;
