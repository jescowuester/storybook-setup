import { Article, OtherCases } from 'containers';
import Head from 'next/head';
import { cases } from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = cases.impraise;

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
        <title>Kudos from Impraise! - ONE.</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Kudos from Impraise! - ONE." />
        <meta property="og:url" content="https://oneworks.co/cases/youtube/" />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kudos from Impraise! - ONE." />
      </Head>
      <Article content={content} />
      <OtherCases />
    </>
  );
};

export default Case;
