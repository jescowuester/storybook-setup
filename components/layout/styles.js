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
  padding-top: 100px;
  height: 100%;
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
