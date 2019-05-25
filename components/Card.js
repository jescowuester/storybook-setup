import PT from "prop-types";
import { Box, Text, Redirect } from "components";
import styled from "styled-components";

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 56%;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: center;
`;

const Card = ({ img, title, text, redirect, secondary }) => (
  <Box mb="160px" mx="30px">
    <Img img={img} />
    <Box bg={secondary ? "white" : "greyLighter"} p="50px">
      <Text mb="30px" as="h4">
        {title}
      </Text>
      <Text mb="40px" fontSize="18px" as="p">
        {text}
      </Text>
      <Redirect secondary={secondary}>{redirect}</Redirect>
    </Box>
  </Box>
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
