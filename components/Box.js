import styled from "styled-components"
import {
  space,
  color,
  width,
  fontSize,
  position,
  height,
  minWidth
} from "styled-system"

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
  minWidth
)

export default Box
