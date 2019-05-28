import React from 'react';
import Link from 'next/link';

import { Flex, Text } from 'components';
import { Nav, Main, Footer } from './styles';

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
  return (
    <>
      <Nav>
        <Link href="/">
          <img css="cursor: pointer" src="/static/logo.svg" />
        </Link>

        <Flex ml="auto">
          {navItems.map(({ href, text, key }) => (
            <Link href={href} key={key}>
              <Text mx="25px" fontSize="18px" as="a">
                {text}
              </Text>
            </Link>
          ))}
        </Flex>
      </Nav>
      <Main>{children}</Main>
      <Footer>footi</Footer>
    </>
  );
};

export default Layout;
