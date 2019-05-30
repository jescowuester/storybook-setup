import { Card, CardLarge, Flex, Box, Section } from 'components';
import { WantToKnowMore } from 'containers';
import React from 'react';
import Head from 'next/head';

const content = {
  largeCard: {
    img: '/static/blog1.jpg',
    title: '4 Reasons for leaving the Corporate Rat Race to join a Scaleup',
    text:
      'Remember when leaving a cushy corporate gig to take a job at a high-growth tech company was considered risky, or even foolish? Much was talked about jeopardising secure career trajectories or risking unexplainable, even downright embarrassing gaps in one’s CV should the startup ...',
    buttonText: 'Read more',
    secondary: true,
    href: '/blog/4-reasons-to-leave-the-corporate-rat-race-and-join-a-scale-up'
  },
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
    },
    {
      img: '/static/blog4.jpg',
      title: 'Vying for Vinted - Clothing Scale Up on the way up.',
      text:
        'We’re pretty excited to be working with Vinted – a Scale Up that’s on its way to even greater things. Hailing originally from Lithuania, vinted was born in 2008 when Milda – the founder – was ...',
      secondary: true,
      href: '/blog/vying-for-vinted-clothing-scale-up-on-the-way-up'
    },
    {
      img: '/static/blog5.png',
      title: 'Living the chocolate dream with Tony’s ...',
      text:
        'A generation who grew up reading and watching the various variations of Charlie and the Chocolate factory. With edible chocolate rivers and trees made of lollipops, it’s any child’s ...',
      secondary: true,
      href: '/blog/living-the-chocolate-dream-with-tonys-chocolonely'
    }
  ],
  wantToKnowMore: {
    img: '/static/placeholder-background.jpg',
    title: 'Want to know more?',
    text: 'Read our Pitch deck for more information',
    button: 'Download'
  }
};

const BlogPosts = () => {
  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <title>Inspiration Blog - ONE.</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Inspiration Blog - ONE." />
        <meta property="og:url" content="https://oneworks.co/news/" />
        <meta property="og:site_name" content="ONE." />
        <meta property="article:publisher" content="https://www.facebook.com/WeAreOne.Works/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inspiration Blog - ONE." />
      </Head>
      <Section bg="greyLighter" p={['50px 40px', '50px 80px', '100px 160px']}>
        <CardLarge {...content.largeCard} />
        <Flex flexWrap="wrap">
          {content.cards.map(props => (
            <Box key={props.title} flexBasis={['100%', '50%', '50%']}>
              <Card {...props} />
            </Box>
          ))}
        </Flex>
      </Section>
      <WantToKnowMore content={content.wantToKnowMore} />
    </>
  );
};

export default BlogPosts;
