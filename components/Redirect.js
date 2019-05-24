import styled from "styled-components";
import { Icon } from "components";
import { space } from "styled-system";

const A = styled.a`
${space}
  color: ${p => p.theme.colors.blueDark};
  font-size: 20px;
  position: relative;
  svg {
    transition: transform 0.2s;
  }
  /* &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    height: 2px;
    background: ${p => p.theme.colors.blueDark};
    width: 0px;
    transition: width 0.2s;
  } */
  &:hover {
    color: ${p => p.theme.colors.blue};
    opacity: 1;
    /* &:after {
    background: ${p => p.theme.colors.blue};
    width: 100%;
  } */
    svg {
      transform: translate3d(5px, 0, 0);
    }
  }
`;

const Redirect = ({ children, ...props }) => (
  <A {...props}>
    {children}
    <Icon ml="10px" icon={["far", "long-arrow-right"]} />{" "}
  </A>
);

export default Redirect;
