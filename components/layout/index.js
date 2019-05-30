import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { Nav, Main, NavSwitcher, NavLink } from './styles';
import Footer from '../../containers/Footer';
import Flex from '../Flex';
import Text from '../Text';
import Icon from '../Icon';

const navItems = [
  {
    text: 'Home',
    href: '/home',
    key: 0
  },
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
        <Link href="/">
          <a>
            <img style={{ height: '24px' }} src="/static/logo.png" />
          </a>
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
                  <NavLink
                    className={router.pathname.match(href) ? 'active' : ''}
                  >
                    {text}
                  </NavLink>
                </Link>
              ))}
            </Flex>
            <Icon
              onClick={open}
              as="button"
              fontSize="25px"
              className="bars"
              mt="3px"
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
            <Footer />
          </>
        )}
      </Main>
    </>
  );
};

export default withRouter(Layout);
