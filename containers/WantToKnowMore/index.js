import styled from "styled-components";

import { Text, Button, Section } from "components";

const SectionWithBackground = styled(Section)`
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const WantToKnowMore = ({ content: { title, text, button, img } }) => (
  <SectionWithBackground
    src={img}
    textAlign="center"
    p="160px"
    bg="greyLighter"
  >
    <Text mb="30px" as="h3">
      {title}
    </Text>
    <Text mb="40px" as="p">
      {text}
    </Text>
    <Button>{button}</Button>
  </SectionWithBackground>
);

export default WantToKnowMore;
