import React from 'react';
import { CardLarge, Section } from 'components';

const LargeCards = ({content}) => {
  return (
    <Section p={["40px","40px","160px"]} bg="greyLighter">
      {content.map(({img,title,text},index) => <CardLarge
            img={img}
            title={title}
            text={text}
            reverse={index%2===0}
       />)}
    </Section>
  );
};

export default LargeCards;
