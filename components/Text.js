import styled from "styled-components";
import {
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  color,
  fontSize,
  space
} from "styled-system";

const Text = styled.span(
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  color,
  fontSize,
  space
);

Text.defaultProps = {
  color: "inherit"
};

export default Text;
