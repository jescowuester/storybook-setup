import styled from "styled-components";
import {
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order
} from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order
);

export default Box;
