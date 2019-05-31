import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Text from '../Text';
import Icon from '../Icon';

const Outer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: ${p => p.theme.colors.blackDark};
  z-index: 2005;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s, transform 0.2s;
  transform: translateX(${p => (p.isOpen ? '0' : '100%')});
  opacity: ${p => (p.isOpen ? '1' : '0')};
`;

const IconPosition = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
`;

const MobileNavLink = styled.a`
  color: ${p => p.theme.colors.white};
  font-size: 30px;
  margin: 20px 0;
  position: relative;
  &.active {
    &:after {
      content: '';
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -12px;
      background: ${p => p.theme.colors.redLighter};
    }
  }
`;

const MobileMenu = ({ navItems, close, isOpen, router }) => {
  return (
    <Outer isOpen={isOpen}>
      <IconPosition>
        <Icon
          as="button"
          fontSize="25px"
          className="bars"
          color="white"
          onClick={close}
          icon={['fal', 'times']}
        />
      </IconPosition>
      {navItems.map(({ href, text, key }) => (
        <Link passHref href={href} key={key}>
          <MobileNavLink
            className={router.pathname.match(href) ? 'active' : ''}
            onClick={close}
          >
            {text}
          </MobileNavLink>
        </Link>
      ))}
    </Outer>
  );
};

export default withRouter(MobileMenu);
