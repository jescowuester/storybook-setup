import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  background: rgba(255, 255, 255, 0.3);
`;

const WantToKnowMore = ({ white, content: { title, text, button, img } }) => {
  const [jobs, setJobs] = useState([]);

  // todo get cors permission
  useEffect(() => {
    axios
      .get('https://careers.oneworks.co/api/jobs?company=One.')
      .then(res => console.log(res.data.data));
  }, []);

  return (
    <SectionWithBackground
      white={white}
      src={img}
      textAlign="center"
      p={['50px 10px', '40px', '160px']}
      bg="greyLighter"
    >
      {white && <Overlay />}
      <Text mb="30px" as="h3">
        {title}
      </Text>
      <Text mb="40px" as="p">
        {text}
      </Text>
      <Button as="a" href="https://docsend.com/view/tfewsuf">
        {button}
      </Button>
    </SectionWithBackground>
  );
};

export default WantToKnowMore;
