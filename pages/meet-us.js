import React from 'react';
import Head from 'next/head';

import {
  HiringEasy,
  TextSection,
  Jobs,
  OurTeam,
  WantToKnowMore
} from 'containers';

const content = {
  hero: {
    img: '/static/home-hero.png',
    title: 'Connecting leaders to scale-ups',
    text:
      "As a team of entrepreneurs, we're all here with a mission to help companies change the world. We're not an agency, which means we don't compete, we work together.",
    button: 'View open positions',
    externalHref: 'https://careers.oneworks.co/jobs?company=One'
  },
  ourTeam: {
    title: 'This is our team.',
    text:
      'We’re crazy about recruitment, more about people. We’re a team of innovators, scale-up enthusiasts, 360 recruiters, sourcers, growth hackers, and content specialists.',
    teamMembers: [
      {
        img: '/static/meet-us-tim.png',
        name: 'Tim Goedhart',
        text:
          'Meet Tim. Tim was the first One team player and is one heck of a guy. Punching well above 6 feet, he is also one of our ambitious Head of Recruitment, with clear plans to help grow our recruitment side of the business and really turn us into a force to be reckoned with in the Netherlands, and the world. Although he didn’t quite say “world domination” it isn’t entirely off the cards it seems.',
        buttonText: 'Learn more',
        _id: 1,
        href: 'https://www.linkedin.com/in/fixingtherecruitmentgame/'
      },
      {
        img: '/static/meet-us-justin.png',
        name: 'Justin Swart',
        text:
          "Meet Justin, our resident Growth Hacker. As fancy and badass as the title sounds, he doesn’t actually do a lot of hacking - but the growth part, he definitely has down pact. He is a born and bread Amsterdammer and couldn't imagine living anywhere else. He joined our team shortly after it all started, and was enticed by the challenge of growing a business from scratch, and the unbridled enthusiasm from Kaan, our founder",
        buttonText: 'Learn more',
        _id: 2,
        href: 'https://www.linkedin.com/in/justin-swart/'
      },
      {
        img: '/static/meet-us-debbie.png',
        name: 'Debbie Breg',
        text:
          'Meet Debbie, Debbie is our secretary of state - which basically means she knows literally everything, all of the time - sort of like a covert agent. As our queen of operations, Debbie keeps things ticking over, and without her I’m sure we would all be pulling our hair out - and that wouldn’t make for good looking team pictures.',
        buttonText: 'Learn more',
        _id: 3,
        href: 'https://www.linkedin.com/in/debbie-breg-242b8313b/'
      },
      {
        img: '/static/meet-us-kaan.png',
        name: 'Kaan Anit',
        text:
          'Meet Kaan, Kaan is our founder - so I guess it’s kudos to him for bringing us all together (we won’t say that too loud though in case he gets big head). With 18 years within the recruitment industry, he is a veteran. Kaan fell into recruitment entirely by accident however, but says retrospectively it makes perfect sense that he did.',
        buttonText: 'Learn more',
        _id: 4,
        href: 'https://www.linkedin.com/in/kaananit/'
      }
    ]
  },
  jobs: {
    title: 'Jobs at One.',
    buttonText: 'View all vacancies',
    href: 'https://careers.oneworks.co/jobs?company=One',
    jobs: [
      {
        _id: 1,
        jobTitle: 'Designer',
        jobTitlePrefix: 'Senior User Experience',
        location: 'Amsterdam, the Netherlands',
        company: 'Oneworks',
        liked: true
      },
      {
        _id: 2,
        jobTitle: 'Designer',
        jobTitlePrefix: 'Senior User Experience',
        location: 'Amsterdam, the Netherlands',
        company: 'Oneworks',
        liked: false
      },
      {
        _id: 3,
        jobTitle: 'Designer',
        jobTitlePrefix: 'Senior User Experience',
        location: 'Amsterdam, the Netherlands',
        company: 'Oneworks',
        liked: false
      }
    ]
  },
  fixRecruitmentGame: {
    title: 'Our mission.',
    col1:
      'We believe the brightest founders and entrepreneurs will turn their disruptive ideas into world-changing businesses. We want to be there with them, supporting & empowering their growth by connecting them to world class people and helping them build all star teams.',
    tagline: '‘Connecting awesome leaders to scale-ups’'
  },
  wantToKnowMore: {
    img: '/static/meet-us-banner.jpg',
    title: 'Want to join the team?',
    text: 'Get in contact with One. of our team members.',
    button: 'Contact us',
    href: 'mailto:tim@oneworks.co'
  }
};

function Index() {
  return (
    <>
      <Head>
        <title>Meet us - ONE.</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Meet us - ONE." />
        <meta property="og:url" content="https://oneworks.co/meet-us/" />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet us - ONE." />
      </Head>
      <HiringEasy secondary content={content.hero} />
      <OurTeam content={content.ourTeam} />
      <TextSection secondary content={content.fixRecruitmentGame} />
      <Jobs content={content.jobs} />
      <WantToKnowMore white content={content.wantToKnowMore} />
    </>
  );
}

export default Index;
