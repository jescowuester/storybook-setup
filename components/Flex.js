import styled from "styled-components";
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth
} from "styled-system";

const Flex = styled.div(
  {
    display: "flex"
  },
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

Flex.displayName = "Flex";

export default Flex;

// Flex.propTypes = {
//   ...flexWrap.propTypes,
//   ...flexDirection.propTypes,
//   ...alignItems.propTypes,
//   ...justifyContent.propTypes
// }
