import React from 'react';
import { CardLarge, Section } from 'components';

const LargeCards = ({ content }) => {
  return (
    <Section bg="greyLighter">
      {content.map((props, index) => (
        <CardLarge {...props} reverse={index % 2 === 0} />
      ))}
    </Section>
  );
};

export default LargeCards;
