import { Article, OtherCases } from 'containers';
import Head from 'next/head';
import { cases } from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = cases.october;

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
        <title>ONE. User Case October - 7 hires - Amsterdam &amp; Madrid</title>
        <meta
          name="description"
          content="October was founded in 2014 in Paris, under the name Lendix, due to new regulations for lending to the SME market. The mission of this amazing scale-up is to allow entrepreneurs to grow by offering honest and simple loans. Today, October is the go-to lending platform for SME’s in continental Europe. After growing rapidly in France, Spain and Italy, the next market for them to conquer was The Netherlands."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="ONE. User Case October - 7 hires - Amsterdam &amp; Madrid"
        />
        <meta
          property="og:description"
          content="October was founded in 2014 in Paris, under the name Lendix, due to new regulations for lending to the SME market. The mission of this amazing scale-up is to allow entrepreneurs to grow by offering honest and simple loans. Today, October is the go-to lending platform for SME’s in continental Europe. After growing rapidly in France, Spain and Italy, the next market for them to conquer was The Netherlands."
        />
        <meta property="og:url" content="https://oneworks.co/cases/october/" />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="October was founded in 2014 in Paris, under the name Lendix, due to new regulations for lending to the SME market. The mission of this amazing scale-up is to allow entrepreneurs to grow by offering honest and simple loans. Today, October is the go-to lending platform for SME’s in continental Europe. After growing rapidly in France, Spain and Italy, the next market for them to conquer was The Netherlands."
        />
        <meta
          name="twitter:title"
          content="ONE. User Case October - 7 hires - Amsterdam &amp; Madrid"
        />
      </Head>
      <Article content={content} />
      <OtherCases />
    </>
  );
};

export default Case;
