import React from 'react';
import Head from 'next/head';
import { LargeCards, TextSection, WeAreSpecialists } from 'containers';

const content = {
  weAreSpecialists: {
    img: '/static/placeholder-background-2.png',
    title: 'We are your remote recruitment specialist',
    text:
      'One. is a trusted talent partner for hyper-growth companies in the Netherlands and Europe. Building on more than 20 years experience in the European technology scene, One. has harnessed the power of strict curation to help companies with Series A funding and beyond to hire the right leadership talent.',
    buttonText: 'Download our pitch'
  },
  fixRecruitmentGame: {
    title: 'Fixing the recruitment game.',
    col1:
      'At the heart of One’s operations is a highly-curated black book featuring senior talent across all disciplines and geographies. It offers scale-ups looking for their next leadership hires, and exceptional professionals looking for their next career move, access to a strictly vetted talent pool of more than 1.500 people.',
    tagline: 'We’re on a mission. As One. Are you in?'
  },

  largeCards: [
    {
      img: '/static/about-card1.jpg',
      title: 'We do recruitment',
      text:
        '<p>As One. we have our finger on the pulse of our Blackbook. We know who is on the move or ready to grow. We know their ambitions, expectations and what gets them excited. We understand the heights their potential can take them to. </p> <p>We combine this market knowledge, with the power of well-curated matchmaking and a finely tuned set of best practices for a more impactful and fast-tracked approach to creating winning teams for scale-ups.</p>',
      buttonText: 'Let’s partner up',
      href: '/contact'
    },
    {
      img: '/static/about-card2.jpg',
      title: 'Growing Together',
      text:
        '<p>We match ambition with vision, personality with culture, skills with challenges so future leaders can take their businesses and their careers to the next level. Growing together, as One.</p><p>Simply put, we believe it’s brilliant people that make the difference between a good team and an amazing one, between a good company and a stellar one.</p>',
      buttonText: 'Let’s partner up',
      href: '/contact'
    }
  ],
  makingHiringEasy: {
    title: 'Making hiring easy.',
    col1:
      'Building on more than 20 years experience in the European technology scene, ONE has harnessed the power of strict curation to help scale-ups find the right leadership talent. We combine the power of talent curation,',
    col2:
      'with our deep market knowledge and a multi-disciplinary team for a more impactful approach to creating winning teams for hypergrowth companies.',
    tagline: 'We imagined it. And then we delivered it.'
  }
};

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ONE.</title>
        <meta charset='UTF-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta name="description" content="Your remote recruitment specialists. We are specialized in helping scale-ups build stronger and bigger teams across a range of tech industries."/>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About - ONE." />
        <meta property="og:description" content="Your remote recruitment specialists. We are specialized in helping scale-ups build stronger and bigger teams across a range of tech industries." />
        <meta property="og:url" content="https://oneworks.co/making-hiring-easy-for-scale-ups/about-one/" />
        <meta property="og:site_name" content="ONE." />
        <meta property="article:publisher" content="https://www.facebook.com/WeAreOne.Works/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Your remote recruitment specialists. We are specialized in helping scale-ups build stronger and bigger teams across a range of tech industries." />
        <meta name="twitter:title" content="About - ONE." />
      </Head>
      <WeAreSpecialists content={content.weAreSpecialists} />
      <TextSection content={content.fixRecruitmentGame} />
      <LargeCards content={content.largeCards} />
      <TextSection content={content.makingHiringEasy} />
    </>
  );
}

export default AboutPage;
