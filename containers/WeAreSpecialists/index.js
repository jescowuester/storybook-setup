import React from 'react';
import styled from 'styled-components';

import { Text, Button, Section } from 'components';

const SectionWithBackground = styled(Section)`
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const WeAreSpecialists = ({ content: { img, title, text, button } }) => (
  <SectionWithBackground
    src={img}
    textAlign={['left', 'center', 'left']}
    p={['40px 20px', '40px', '160px']}
    bg="greyLighter"
    pr={['20px', '40px', '45%']}
  >
    <Text mb="30px" as="h3">
      {title}
    </Text>
    <Text mb="40px" as="p">
      {text}
    </Text>
    <Button> {button} </Button>
  </SectionWithBackground>
);

export default WeAreSpecialists;
