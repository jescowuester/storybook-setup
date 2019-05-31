import React from 'react';
import styled from 'styled-components';

import { Text, Button, Section, Box } from 'components';

const SectionWithBackground = styled(props => <Section {...props} />)`
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`;

const WeAreSpecialists = ({ content: { img, title, text, buttonText } }) => (
  <SectionWithBackground fullWidth src={img} p="0">
    <Box
      textAlign={['left', 'center', 'left']}
      p={['80px 16px', '80px 40px', '160px']}
      pr={['16px', '30%', '46%']}
      maxWidth="1400px"
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
    </Box>
  </SectionWithBackground>
);

export default WeAreSpecialists;
