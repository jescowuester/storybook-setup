import styled from 'styled-components';
import Link from 'next/link';
import { space } from 'styled-system';

const Nav = styled.nav`
  z-index: 2000;
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 0 160px;
  background: ${p => p.theme.colors.white};
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  margin-top: 100px;
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  margin: 0 20px;
`;

const StyledFooter = styled.footer`
  background: ${p => p.theme.colors.blackDarker};
  color: ${p => p.theme.colors.white};
  ${space}
`;

export { Main, StyledFooter, Nav, NavLink };
