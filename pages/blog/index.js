import { Card, CardLarge, Flex, Box, Section } from 'components';
import { WantToKnowMore } from 'containers';
import React from 'react';
import Head from 'next/head';

const content = {
  largeCard: {
    img: '/static/client-cases4.jpg',
    title: 'Setting up a team from scratch in The Netherlands',
    text:
      'October was founded in 2014 in Paris, under the name Lendix, due to new regulations for lending to the SME market. The mission of this amazing scale-up is to allow entrepreneurs ...',
    buttonText: 'Read more',
    secondary: true,
    href: '/cases/october'
  },
  cards: [
    {
      img: '/static/blog1.jpg',
      title: '4 Reasons for leaving the Corporate Rat Race to join a Scaleup',
      text:
        'Remember when leaving a cushy corporate gig to take a job at a high-growth tech company was considered risky, or even foolish? Much was talked about jeopardising secure career trajectories or risking unexplainable, even downright embarrassing gaps in one’s CV should the startup ...',
      secondary: true,
      href:
        '/blog/4-reasons-to-leave-the-corporate-rat-race-and-join-a-scale-up/'
    },
    {
      img: '/static/client-cases1.jpg',
      title: 'Kudos from Impraise! Growing their people.',
      text:
        'Impraise were one of our early adopters, they’re a scale up working in the HR tech space and are making some productive and innovative changes. As a fun team of dedicated innovators ...',
      secondary: true,
      href: '/cases/impraise'
    },
    {
      img: '/static/client-cases2.jpg',
      title: '50Five',
      text: 'Expanding the team for 50Five.',
      secondary: true,
      href: '/cases/fiftyfive'
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
