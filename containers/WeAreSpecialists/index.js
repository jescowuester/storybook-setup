import React from 'react';
import styled from 'styled-components';

import { Text, Button, Section } from 'components';

const SectionWithBackground = styled(props => <Section {...props} />)`
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const WeAreSpecialists = ({ content: { img, title, text, buttonText } }) => (
  <SectionWithBackground
    src={img}
    textAlign={['left', 'center', 'left']}
    p={['80px 20px', '80px 40px', '160px']}
    bg="greyLighter"
    pr={['20px', '40px', '56%']}
  >
    <Text mb="30px" as="h3">
      {title}
    </Text>
    <Text mb="40px" as="p">
      {text}
    </Text>
    <Button as="a" target="blank" href="https://docsend.com/view/tfewsuf">
      {buttonText}
    </Button>
  </SectionWithBackground>
);

export default WeAreSpecialists;
