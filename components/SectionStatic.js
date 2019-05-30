import styled from 'styled-components';
import { space, color, position, height, textAlign } from 'styled-system';

const SectionStatic = styled.section`
  padding-top: 160px;
  padding-bottom: 160px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;

  ${space}
  ${color}
  ${position}
  ${height}
  ${textAlign}

  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    max-width: 960px;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export default SectionStatic;
