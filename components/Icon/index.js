import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { space, color, fontSize } from "styled-system";

const Container = styled.span`
  /* reset button styles */
  appearance: none;
  all: unset;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  /* styled system */
  ${space}
  ${color}
  ${fontSize}
  cursor: ${props => (props.as === "button" ? "pointer" : "inherit")};
`;

const Icon = ({ as, icon, ...rest }) => (
  <Container {...rest} as={as || "span"}>
    <FontAwesomeIcon icon={icon} />
  </Container>
);

export default Icon;
