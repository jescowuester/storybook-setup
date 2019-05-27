import styled from "styled-components";
import { space } from "styled-system";

import { Icon } from "components";

const A = styled.a`
  ${space}
  color: ${({ secondary, theme: { colors } }) =>
    secondary ? colors.redLight : colors.blueDark};
  font-size: 20px;
  position: relative;
  white-space: nowrap;
  transition: color 0.2s;

  svg {
    transition: transform 0.2s;
  }

  &:hover {
    opacity: 1;
    color: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.red : colors.blue};

    svg {
      transform: translate3d(5px, 0, 0);
    }
  }
`;

const TextButton = ({ children, ...props }) => (
  <A {...props}>
    {children}
    <Icon ml="10px" icon={["far", "long-arrow-right"]} />{" "}
  </A>
);

export default TextButton;
