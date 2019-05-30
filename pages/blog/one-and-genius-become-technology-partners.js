import React from 'react';
import { Article, OtherBlogPosts } from 'containers';
import { blogPosts } from '../../data';

const Case = () => {
  const { title, text, backButton, backHref } = blogPosts[
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
      <Article content={content} />
      <OtherBlogPosts />
    </>
  );
};

export default Case;
