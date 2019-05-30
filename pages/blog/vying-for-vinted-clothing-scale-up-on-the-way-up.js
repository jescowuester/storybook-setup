import React from 'react';
import { Article, OtherBlogPosts } from 'containers';
import { blogPosts } from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = blogPosts[
    'vying-for-vinted-clothing-scale-up-on-the-way-up'
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
