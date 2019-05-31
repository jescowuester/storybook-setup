import { Card, Flex, Box, Section } from 'components';
import React from 'react';

const content = {
  cards: [
    {
      img: '/static/blog2.jpg',
      title: 'Building up the Ageras team in the Netherlands',
      text:
        'Al 6 jaar verbindt Ageras klanten met accountants en boekhouders in Denemarken, Zweden, Noorwegen, Nederland, Duitsland en het Verenigd Koninkrijk. Het succesverhaal begon ...',
      secondary: true,
      href: '/blog/building-up-the-ageras-team-in-the-netherlands'
    },
    {
      img: '/static/blog3.jpg',
      title: 'One. and Genius become technology partners.',
      text:
        'Cutting edge technologies like AI, machine learning, blockchain and the internet of things can change the world for the better. But they only do so when effectively trained, trusted and ...',
      secondary: true,
      href: '/blog/one-and-genius-become-technology-partners'
    }
  ]
};

const OtherBlogPosts = () => {
  return (
    <Section bg="greyLighter">
      <Flex flexWrap="wrap" mx={['-10px', '-10px', '-30px']}>
        {content.cards.map(props => (
          <Box
            key={props.title}
            mb={['20px', '0', '80px']}
            mx={['10px', '10px', '30px']}
            flexBasis={[
              'calc(100% - 20px)',
              'calc(50% - 20px)',
              'calc(50% - 60px)'
            ]}
          >
            <Card {...props} />
          </Box>
        ))}
      </Flex>
    </Section>
  );
};

export default OtherBlogPosts;
