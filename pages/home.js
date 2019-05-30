import React from 'react';
import Head from 'next/head';

import {
  ClientCases,
  HiringEasy,
  InGreatCompany,
  WhatWeDo,
  WantToKnowMore
} from 'containers';

const content = {
  hiringEasy: {
    img: '/static/home-hero.png',
    title: ' Connecting leaders and scale-ups.',
    text:
      'Over the past 20 years, we have gotten to know the right people, in the right places, at the right time. Whether you are looking for a CTO, a VP Marketing, a Head of Product or even for an entirely new team of experts - we handpicked the ‘Who is Who’.',
    button: 'Read more',
    href: '/about'
  },
  whatWeDo: {
    title: 'What we do.',
    card1: {
      img: '/static/what-we-do1.jpg',
      title: 'Smart hiring as integral to the business strategy',
      text:
        'To be sustainable, leadership hiring must be part of your business plan and your long-term vision. We will develop a rich understanding of your culture, the stage of growth you are in, the current team and the talent market. Our team will then align roles and skills with your growth strategy.',
      href: '/about'
    },
    card2: {
      img: '/static/what-we-do2.jpg',
      title: 'Branding as the secret sauce',
      text:
        'You’ve got the attractive culture and inspiring work environment nailed, we make sure that world-class talent knows about it. With our 360 team, we use contemporary content marketing, digital advertising, and SEO tactics to make sure the right messaging lands in front of the right people at the right time, using the right channels. LinkedIn, email, Facebook ads, direct message - brand consistency is key, and we’ve got you covered.',
      href: '/about'
    },
    card3: {
      img: '/static/what-we-do3.jpg',
      title: 'Sourcing - our black book at work',
      text:
        'Here is where our experience and our black book will really come into play. We know our network, and we know how to speak to them. Clear, honest and personable. It’s this legwork that defines the beginning of an exceptional candidate experience. All you need to do is set aside time to meet those qualified professionals that will be the closest match to your own unique culture and vision.',
      href: '/about'
    },
    card4: {
      img: '/static/what-we-do4.jpg',
      title: 'Coaching from beginning to end',
      text:
        'Leadership talent is high maintenance (rightly so!), and hiring at this level is a reputational tightrope walk. You only get one chance to make a first impression. We will coach you through every stage of the hiring process to create a best-in-class candidate experience that will help you win the race for talent: from interviews and assessments, to reference checking, to rejections, to offer negotiations and to onboarding.',
      href: '/about'
    }
  },
  clientCases: {
    title: 'Client Cases.',
    card1: {
      img: '/static/client-cases1.jpg',
      title: 'Impraise',
      text: 'Kudos from Impraise!',
      href: '/cases/impraise'
    },
    card2: {
      img: '/static/client-cases2.jpg',
      title: '50five',
      text: 'Expanding the team for 50Five.',
      href: '/cases/fiftyfive'
    },
    card3: {
      img: '/static/client-cases3.jpg',
      title: 'Talmundo',
      text: 'Adding some key-hires to a company in transition.',
      href: '/cases/talmundo'
    },
    card4: {
      img: '/static/client-cases4.jpg',
      title: 'October',
      text: 'Setting up a team from scratch in The Netherlands.',
      href: '/cases/october'
    },
    button: 'Read more',
    href: '/cases'
  },
  inGreatCompany: {
    title: "You're in great company",
    text:
      'With deep roots in the European tech scene, we have contributed to the stellar growth of many of the most innovative companies in the Netherlands, and beyond.',
    companies: [
      {
        name: 'vanmoof',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo1.png',
        _id: 1
      },
      {
        name: 'vinted',
        href: 'https://www.vinted.com/',
        img: '/static/company-logo2.png',
        _id: 2
      },
      {
        name: 'october',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo3.png',
        _id: 3
      },
      {
        name: 'speakapp',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo4.png',
        _id: 4
      },
      {
        name: 'via van',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo5.png',
        _id: 5
      },
      {
        name: 'talmundo',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo6.png',
        _id: 6
      },
      {
        name: 'weadapt',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo7.png',
        _id: 7
      },
      {
        name: 'healthy workers',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo8.png',
        _id: 8
      },
      {
        name: 'friss',
        href: 'https://www.vanmoof.com/en_nl/',
        img: '/static/company-logo9.png',
        _id: 9
      }
    ]
  },
  wantToKnowMore: {
    img: '/static/placeholder-background.jpg',
    title: 'Want to know more?',
    text: 'Read our Pitch deck for more information',
    button: 'Download'
  }
};

function HomePage() {
  return (
    <>
      <Head>
        <title>ONE. making hiring easy for scale-ups.</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="We help scale-ups build world class teams. Our simple goal is to make hiring easy. To help businesses get the talent they need to succeed."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ONE. making hiring easy for scale-ups."
        />
        <meta
          property="og:description"
          content="We help scale-ups build world class teams. Our simple goal is to make hiring easy. To help businesses get the talent they need to succeed."
        />
        <meta
          property="og:url"
          content="https://oneworks.co/making-hiring-easy-for-scale-ups/"
        />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="We help scale-ups build world class teams. Our simple goal is to make hiring easy. To help businesses get the talent they need to succeed."
        />
        <meta
          name="twitter:title"
          content="ONE. making hiring easy for scale-ups."
        />
      </Head>
      <HiringEasy content={content.hiringEasy} />
      <WhatWeDo content={content.whatWeDo} />
      <ClientCases content={content.clientCases} />
      <InGreatCompany content={content.inGreatCompany} />
      <WantToKnowMore content={content.wantToKnowMore} />
    </>
  );
}

export default HomePage;
