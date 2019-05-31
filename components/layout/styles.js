import styled from 'styled-components';
import { space } from 'styled-system';

const Nav = styled.nav`
  z-index: 2000;
  height: 100px;
  width: 100vw;
  position: fixed;
  top: 0;
  background: ${p => p.theme.colors.white};
  display: flex;
  justify-content: center;

  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    height: 60px;
  }
`;

const Main = styled.main`
  padding-top: 100px;
  height: 100%;

  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    padding-top: 60px;
  }
`;

const NavLink = styled.a`
  font-size: 18px;
  margin: 0 20px;
  color: ${p => p.theme.colors.black};
  position: relative;
  &.active {
    &:after {
      content: '';
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -12px;
      background: ${p => p.theme.colors.blueDark};
    }
  }
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
