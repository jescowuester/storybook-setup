import PT from "prop-types";
import { Box, Text, Redirect } from "components";
import styled from "styled-components";

const Img = styled.div`
  width: 50%;
  height: 100%;
  /* padding-left: 100%; */
  background-image: url(${p => p.src});
  background-size: cover;
  background-position: center;
`;

const Card = ({ src, title, text, redirect, secondary }) => (
  <Flex mb="160px" mx="30px">
    <Img src={src} />
    <Box bg={secondary ? "white" : "greyLighter"} p="50px">
      <Text mb="30px" as="h4">
        {title}
      </Text>
      <Text mb="40px" fontSize="18px" as="p">
        {text}
      </Text>
      <Redirect secondary={secondary}>{redirect}</Redirect>
    </Box>
  </Flex>
);

Card.defaultProps = {
  redirect: "Learn more",
  secondary: false
};

Card.propTypes = {
  src: PT.string.isRequired,
  title: PT.string.isRequired,
  text: PT.string.isRequired,
  redirect: PT.string,
  secondary: PT.bool
};

export default Card;
