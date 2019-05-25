import {
  Home,
  HiringEasy,
  WhatWeDo,
  ClientCases,
  InGreatCompany,
  WantToKnowMore,
  WeAreSpecialists,
  FixRecruitmentGame
} from "containers";

const content = {
  home: {
    leftCol: {
      tagLine: "You are a",
      title: "Candidate",
      text:
        "Don’t check for job opportunities yourself. We do that work for you, matching you with the best scale-ups worldwide. Are you ready?",
      button: "Find opportunities here"
    },
    rightCol: {
      tagLine: "You are a",
      title: "Scale-up",
      text:
        "We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best new talents today.",
      button: "Find opportunities here"
    }
  },
  hiringEasy: {
    img: "/static/placeholder.jpg",
    title: "Want to make hiring easy?",
    text:
      "We have an extremely large network. Built up from more than 20 years of experience. Let us find your next best new talents today.",
    button: "Book a call"
  },
  whatWeDo: {
    title: "What we do.",
    card1: {
      img: "/static/placeholder.jpg",
      title: "Recruitment",
      text:
        "From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times."
    },
    card2: {
      img: "/static/placeholder.jpg",
      title: "Recruitment",
      text:
        "From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times."
    },
    card3: {
      img: "/static/placeholder.jpg",
      title: "Recruitment",
      text:
        "From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times."
    },
    card4: {
      img: "/static/placeholder.jpg",
      title: "Recruitment",
      text:
        "From a single key hire to multiple key hires. At One we can help you to allocate and attract these ‘had to find’ people. We’ve done it over a thousand times."
    }
  },
  clientCases: {
    title: "Client Cases.",
    card1: {
      img: "/static/placeholder.jpg",
      title: "Impraise",
      text: "Kudos from Impraise!"
    },
    card2: {
      img: "/static/placeholder.jpg",
      title: "Impraise",
      text: "Kudos from Impraise!"
    },
    card3: {
      img: "/static/placeholder.jpg",
      title: "Impraise",
      text: "Kudos from Impraise!"
    },
    card4: {
      img: "/static/placeholder.jpg",
      title: "Impraise",
      text: "Kudos from Impraise!"
    },
    button: "Read more"
  },
  inGreatCompany: {
    title: " You're in great company",
    text:
      "We know it takes time, money and resource to find the right talent. While you focus on growing your business, we can take care of finding you your dream team.",
    companies: [
      {
        name: "vanmoof",
        href: "https://www.vanmoof.com/en_nl/",
        img: "/static/placeholder-logo.png"
      },
      {
        name: "vanmoof",
        href: "https://www.vanmoof.com/en_nl/",
        img: "/static/placeholder-logo.png"
      },
      {
        name: "vanmoof",
        href: "https://www.vanmoof.com/en_nl/",
        img: "/static/placeholder-logo.png"
      },
      {
        name: "vanmoof",
        href: "https://www.vanmoof.com/en_nl/",
        img: "/static/placeholder-logo.png"
      },
      {
        name: "vanmoof",
        href: "https://www.vanmoof.com/en_nl/",
        img: "/static/placeholder-logo.png"
      },
      {
        name: "vanmoof",
        href: "https://www.vanmoof.com/en_nl/",
        img: "/static/placeholder-logo.png"
      }
    ]
  },
  wantToKnowMore: {
    img: "/static/placeholder-background.jpg",
    title: "Want to know more?",
    text: "Download our Scale-up pitch.",
    button: "Download"
  },
  weAreSpecialists: {
    img: "/static/placeholder-background-2.png",
    title: "We are your remote recruitment specialist",
    text:
      "We are specialized in helping scale-ups build stronger and bigger teams across a range of tech industries. Crazy about recruitment, even more about people.",
    button: "Download our pitch"
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
      <FixRecruitmentGame />
    </>
  );
}

export default Index;
