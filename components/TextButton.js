import styled from "styled-components";
import { Icon } from "components";
import { space } from "styled-system";

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
    color: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.red : colors.blue};
    opacity: 1;
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
