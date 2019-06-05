import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Main } from './styles';
import { Flex, Box, Icon, Text, Nav } from 'components';

const Layout = ({ children, router }) => {
  const [menuIsOpen, setMenu] = useState(false);
  const openMenu = () => setMenu(true);
  const closeMenu = () => setMenu(false);
  const toggleMenu = () => setMenu(!menuIsOpen);

  const isHome = router.pathname === '/';

  return (
    <>
      <Nav
        isHome={isHome}
        openMenu={openMenu}
        closeMenu={closeMenu}
        toggleMenu={toggleMenu}
        menuIsOpen={menuIsOpen}
      />
      <Main isHome={isHome}>
        {children}

        {!isHome && <></>}
      </Main>
    </>
  );
};

export default withRouter(Layout);
