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
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    padding: 0 20px;
  }
`;

const Main = styled.main`
  margin-top: 100px;
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;

const NavLink = styled(props => <Link passHref {...props} />)`
  font-size: 18px;
  margin: 0 20px;
`;

const StyledFooter = styled.footer`
  background: ${p => p.theme.colors.blackDarker};
  color: ${p => p.theme.colors.white};
  ${space}
`;

const NavSwitcher = styled.div`
  margin-left: auto;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    .text {
      display: none;
    }
    .bars {
      display: block;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    .text {
      display: flex;
    }
    .bars {
      display: none;
    }
  }
`;

export { Main, StyledFooter, Nav, NavLink, NavSwitcher };
