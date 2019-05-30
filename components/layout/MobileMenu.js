import React from 'react';
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

const MobileMenu = ({ navItems, close, isOpen }) => {
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
          <Text onClick={close} color="white" my="20px" fontSize="30px" as="a">
            {text}
          </Text>
        </Link>
      ))}
    </Outer>
  );
};

export default MobileMenu;
