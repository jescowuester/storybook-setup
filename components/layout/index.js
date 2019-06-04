import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Nav, Main, NavSwitcher, NavLink } from './styles';
import { Flex, Box, Icon, Text } from 'components';

const Layout = ({ children, router }) => {
  const [menuOpen, setMenu] = useState(false);
  const close = () => setMenu(false);
  const open = () => setMenu(true);

  const isHome = router.pathname === '/';

  return (
    <>
      <Nav>
        <Flex>a</Flex>
      </Nav>
      <MobileMenu isOpen={menuOpen} close={close} navItems={navItems} />
      <Main>
        {children}

        {!isHome && (
          <>
            <Footer />
          </>
        )}
      </Main>
    </>
  );
};

export default withRouter(Layout);
