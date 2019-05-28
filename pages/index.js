import React from 'react';
import {
  Home,
  HiringEasy,
  WhatWeDo,
  ClientCases,
  InGreatCompany,
  WantToKnowMore,
  WeAreSpecialists,
  TextSection
} from 'containers';

const content = {
  home: {
    leftCol: {
      tagLine: 'You are a',
      title: 'Candidate',
      text:
        'Don’t check for job opportunities yourself. We do that work for you, matching you with the best scale-ups worldwide. Are you ready?',
      button: 'Find opportunities here'
    },
    rightCol: {
      tagLine: 'You are a',
      title: 'Scale-up',
      text:
        'We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best new talents today.',
      button: 'Find opportunities here'
    }
  },
  hiringEasy: {
    img: '/static/placeholder.jpg',
    title: 'Want to make hiring easy?',
    text:
      'We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best new talents today.',
    button: 'Book a call'
  },
  whatWeDo: {
    title: 'What we do.',
    card1: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    },
    card2: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    },
    card3: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    },
    card4: {
      img: '/static/placeholder.jpg',
      title: 'Recruitment',
      text:
        'From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times.'
    }
  },
  clientCases: {
    title: 'Client Cases.',
    card1: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    card2: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    card3: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    card4: {
      img: '/static/placeholder.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!'
    },
    button: 'Read more'
  },
  inGreatCompany: {
    title: " You're in great company",
    text:
      'We know it takes time, money and resource to find the right talent. While you focus on growing your business, we can take care of finding you your dream team.',
    companies: [
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 1
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 2
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 3
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 4
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 5
      },
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/placeholder-logo.png',
        _id: 6
      }
    ]
  },
  wantToKnowMore: {
    img: '/static/placeholder-background.jpg',
    title: 'Want to know more?',
    text: 'Download our Scale-up pitch.',
    button: 'Download'
  },
  weAreSpecialists: {
    img: '/static/placeholder-background-2.png',
    title: 'We are your remote recruitment specialist',
    text:
      'We are specialized in helping scale-ups build stronger and bigger teams across a range of tech industries. Crazy about recruitment, even more about people.',
    button: 'Download our pitch'
  },
  fixRecruitmentGame: {
    title: 'Fixing the recruitment game.',
    col1:
      'We have the recruitment knowledge, man power, experience, tools and the network to place the perfect candidates in the right roles and support you on your additional a needs along the way. We’re on a mission.',
    tagline: 'We’re on a mission. As One. Are you in?'
  },
  makingHiringEasy: {
    title: 'Making hiring easy.',
    col1:
      'This is our goal. To help businesses get the talent they need to succeed. And to help people find a job they love. \n Everyone is incredibly frustrated by how hard it is to find amazing talent. We share that frustration. Recruiting is a fragmented, opaque process undermined by outdated technology that turns off candidates and hiring managers.',
    col2:
      'Now, imagine a world where it’s easy to find great candidates, it’s easy for people to show interest in jobs, it’s easy for hiring teams to collaborate, and your recruiting vendors are just a click away.',
    tagline: 'We imagined it. And then we delivered it.'
  }
};

function Index() {
  return (
    <>
      <Home content={content.home} />
      <HiringEasy content={content.hiringEasy} />
      <WhatWeDo content={content.whatWeDo} />
      <ClientCases content={content.clientCases} />
      <InGreatCompany content={content.inGreatCompany} />
      <WantToKnowMore content={content.wantToKnowMore} />
      <WeAreSpecialists content={content.weAreSpecialists} />
      <TextSection content={content.fixRecruitmentGame} />
      <TextSection content={content.makingHiringEasy} />
    </>
  );
}

export default Index;
