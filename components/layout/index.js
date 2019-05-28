import React, { useState } from 'react';
import Link from 'next/link';

import { Flex, Text, Icon } from 'components';
import { Footer } from 'containers';
import MobileMenu from './MobileMenu';
import { Nav, Main, NavSwitcher } from './styles';

const navItems = [
  {
    text: 'About',
    href: 'about',
    key: 1
  },
  {
    text: 'Cases',
    href: 'cases',
    key: 2
  },
  {
    text: 'Meet Us',
    href: 'meetus',
    key: 3
  },
  {
    text: 'Contact',
    href: 'contact',
    key: 4
  },
  {
    text: 'Blog',
    href: 'blog',
    key: 5
  }
];

const Layout = ({ children }) => {
  const [menuOpen, setMenu] = useState(false);
  const close = () => setMenu(false);
  const open = () => setMenu(true);
  return (
    <>
      <Nav>
        <Link href="/">
          <img css="cursor: pointer" src="/static/logo.svg" />
        </Link>

        <NavSwitcher>
          <Flex className="text">
            {navItems.map(({ href, text, key }) => (
              <Link href={href} key={key}>
                <Text mx="25px" fontSize="18px" as="a">
                  {text}
                </Text>
              </Link>
            ))}
          </Flex>
          <Icon
            onClick={open}
            as="button"
            fontSize="25px"
            className="bars"
            icon={['far', 'bars']}
          />
        </NavSwitcher>
      </Nav>
      <MobileMenu isOpen={menuOpen} close={close} navItems={navItems} />
      <Main>
        {children}
        <Footer />
      </Main>
    </>
  );
};

export default Layout;
