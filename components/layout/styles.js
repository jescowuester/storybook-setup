import styled from 'styled-components';

const Main = styled.main`
  padding-top: 110px;
  height: 100%;
  min-height: 100vh;
  @media (max-width: ${p => p.theme.breakpoints.lg}) {
    padding-top: ${p => (p.isLarge ? 0 : '70px')};
  }
`;

export { Main };
