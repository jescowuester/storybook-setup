import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth,
  alignItems,
  alignContent,
  justifyContent,
  textAlign
} from 'styled-system';

const Flex = styled.div(
  {
    display: 'flex'
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
  alignContent,
  justifyContent,
  textAlign
);

Flex.displayName = 'Flex';

export default Flex;

// Flex.propTypes = {
//   ...flexWrap.propTypes,
//   ...flexDirection.propTypes,
//   ...alignItems.propTypes,
//   ...justifyContent.propTypes
// }
