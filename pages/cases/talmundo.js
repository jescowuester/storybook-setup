import { Article, OtherCases } from 'containers';
import Head from 'next/head';
import { cases } from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = cases.talmundo;

  const content = {
    title,
    text,
    shareText: 'Share this story',
    backButton,
    backHref
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>ONE. - Adding some key-hires to a company in transition</title>
        <meta
          name="description"
          content="Talmundo is going through a few changes and asked One. to jump on board and help them out."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ONE. - Adding some key-hires to a company in transition"
        />
        <meta
          property="og:description"
          content="Talmundo is going through a few changes and asked One. to jump on board and help them out."
        />
        <meta
          property="og:url"
          content="https://oneworks.co/cases/case-study-talmundo/"
        />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="Talmundo is going through a few changes and asked One. to jump on board and help them out."
        />
        <meta
          name="twitter:title"
          content="ONE. - Adding some key-hires to a company in transition"
        />
      </Head>
      <Article content={content} />
      <OtherCases />
    </>
  );
};

export default Case;
