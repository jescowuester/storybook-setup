import styled from "styled-components";
import { space, color, width, fontSize } from "styled-system";
import Link from "next/link";

const Button = styled.button`
  box-shadow: ${p => p.theme.shadows.z2};
  border: none;
  border-radius: 5px;
  border: 2px solid transparent;
  color: ${p => p.theme.colors.white};
  background: ${({ secondary, theme: { colors } }) =>
    secondary ? colors.redLight : colors.blueDark};
  &:hover{
    background: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.redLighter : colors.blue};
  };
  &:focus{
  }
  &:disabled{
    background: ${p => p.theme.colors.grey};
  }
  &:active{
    box-shadow: ${p => p.theme.shadows.z1};
  }
  transition: background 0.2s, box-shadow 0.2s;
  ${space}
  ${color}
  ${width}
  ${fontSize}
  `;

Button.defaultProps = {
  py: "15px",
  px: "26px",
  fontSize: "20px"
};

export default Button;
