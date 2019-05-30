import React from 'react';
import { Article, OtherBlogPosts } from 'containers';
import { blogPosts } from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = blogPosts[
    '4-reasons-to-leave-the-corporate-rat-race-and-join-a-scale-up'
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
      <Article content={content} />
      <OtherBlogPosts />
    </>
  );
};

export default Case;
