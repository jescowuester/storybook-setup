import styled from "styled-components";
import Link from "next/link";

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
  padding-top: 100px;
  min-height: 100vh;
`;

const NavLink = styled(Link)`
  font-size: 18px;
  margin: 0 20px;
`;

const Footer = styled.footer`
  background: ${p => p.theme.colors.blackDarker};
  height: 524px;
  color: ${p => p.theme.colors.white};
  padding: 90px 220px;
`;

export { Main, Footer, Nav, NavLink };
