import React from 'react';
import { Article, OtherBlogPosts } from 'containers';
import Head from 'next/head';
import { blogPosts } from '../../data';

const Case = () => {
  const { title, text, backButton } = blogPosts[
    'one-and-genius-become-technology-partners'
  ];

  const content = {
    title,
    text,
    shareText: 'Share this story',
    backButton,
    backHref: '/blog'
  };

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <title>One. and Genius become technology partners</title>
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="One. and Genius become technology partners"
        />
        <meta
          property="og:url"
          content="https://oneworks.co/blog/amazon-com/"
        />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="One. and Genius become technology partners"
        />
      </Head>
      <Article content={content} />
      <OtherBlogPosts />
    </>
  );
};

export default Case;
