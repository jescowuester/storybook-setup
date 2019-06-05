import styled from 'styled-components';
import { space } from 'styled-system';

const Main = styled.main`
  padding-top: ${p => (p.isHome ? 0 : '110px')};

  height: 100%;

  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding-top: ${p => (p.isHome ? 0 : '70px')};
  }
`;

export { Main };
