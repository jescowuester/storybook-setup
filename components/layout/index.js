import React, { useState } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Nav, Main, NavSwitcher } from './styles';
import Footer from '../../containers/Footer';
import styled from 'styled-components';
import Flex from '../Flex';
import Text from '../Text';
import Icon from '../Icon';

const navItems = [
  {
    text: 'About',
    href: '/about',
    key: 1
  },
  {
    text: 'Cases',
    href: '/cases',
    key: 2
  },
  {
    text: 'Meet Us',
    href: '/meet-us',
    key: 3
  },
  {
    text: 'Contact',
    href: '/contact',
    key: 4
  },
  {
    text: 'Blog',
    href: '/blog',
    key: 5
  }
];

const StyledText = styled(p => <Text {...p} />)`
  margin-left: auto;
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    display: none;
  }
`;

const Layout = ({ children, router }) => {
  const [menuOpen, setMenu] = useState(false);
  const close = () => setMenu(false);
  const open = () => setMenu(true);

  const isHome = router.pathname === '/';
  return (
    <>
      <Nav>
        <Link href="/home">
          <img css="cursor: pointer" src="/static/logo.svg" />
        </Link>

        {isHome ? (
          <StyledText fontSize="18px" color="blackDark" as="p">
            Connecting awesome leaders to scale-ups.
          </StyledText>
        ) : (
          <NavSwitcher>
            <Flex className="text">
              {navItems.map(({ href, text, key }) => (
                <Link passHref href={href} key={key}>
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
        )}
      </Nav>
      <MobileMenu isOpen={menuOpen} close={close} navItems={navItems} />
      <Main>
        {children}

        {!isHome && (
          <>
            {' '}
            <Footer />{' '}
          </>
        )}
      </Main>
    </>
  );
};

export default withRouter(Layout);
