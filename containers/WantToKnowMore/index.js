import React from 'react';
import styled from 'styled-components';
import { Text, Button, Section } from 'components';

const SectionWithBackground = styled(props => <Section {...props} />)`
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
  position: relative;
  h3 {
    position: relative;
  }
  p {
    position: relative;
  }
  a {
    position: relative;
  }
`;

const Overlay = styled.div`
  z-index: 0;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: ${p => p.theme.colors.greyLight};
`;

const WantToKnowMore = ({
  white,
  content: { title, text, button, img, href }
}) => {
  return (
    <SectionWithBackground
      fullWidth
      white={white}
      src={img}
      textAlign="center"
      p={['60px 10px', '80px 40px', '160px']}
      bg="greyLighter"
    >
      {white && <Overlay />}
      <Text mb="30px" as="h3">
        {title}
      </Text>
      <Text mb="40px" as="p">
        {text}
      </Text>
      <Button
        as="a"
        target="blank"
        href={href || 'https://docsend.com/view/tfewsuf'}
      >
        {button}
      </Button>
    </SectionWithBackground>
  );
};

export default WantToKnowMore;
