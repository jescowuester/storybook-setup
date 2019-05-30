import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import Link from 'next/link';

import { Text, Flex, TextButton } from 'components';
import { StyledFooter } from 'components/layout/styles';

const leftNav = [
  {
    title: 'Candidates',
    links: [
      { to: 'https://careers.oneworks.co/', name: 'Home', isExternal: true },
      {
        to: 'https://careers.oneworks.co/register',
        name: 'Sign up',
        isExternal: true
      }
    ]
  },
  {
    title: 'Scale Ups',
    links: [
      { to: '/home', name: 'Home', isExternal: false },
      { to: '/about', name: 'About', isExternal: false },
      { to: '/cases', name: 'Cases', isExternal: false },
      { to: '/meet-us', name: 'Meet us', isExternal: false },
      { to: '/contact', name: 'Contact', isExternal: false },
      { to: '/blog', name: 'Blog', isExternal: false }
    ]
  }
];

const centerNav = [
  {
    title: 'Legal',
    links: [
      {
        to: '/static/pdf/cookie_policy.pdf',
        name: 'Cookie Policy',
        isExternal: true
      },
      {
        to: '/static/pdf/privacy_policy.pdf',
        name: 'Privacy Policy',
        isExternal: true
      },
      { to: '/static/pdf/gdpr.pdf', name: 'GDPR', isExternal: true },
      {
        to: '/static/pdf/terms_and_conditions.pdf',
        name: 'Terms & Conditions',
        isExternal: true
      }
    ]
  }
];

const rightNav = [
  {
    title: 'Find Us',
    links: [
      {
        to: 'https://www.linkedin.com/company/fixingtherecruitmentgame',
        name: 'LinkedIn',
        isExternal: true
      },
      {
        to: 'https://www.instagram.com/oneworks.ams/',
        name: 'Instagram',
        isExternal: true
      },
      {
        to: 'https://www.facebook.com/Oneteam-2476326322397423',
        name: 'Facebook',
        isExternal: true
      }
    ]
  }
];

const TradeMarkContainer = styled(props => <Flex {...props} />)``;
const Content = styled(props => <Flex {...props} />)``;
const Col = styled(props => <Flex {...props} />)``;
const NavItemContainer = styled(props => <Flex {...props} />)``;
const Image = styled.img`
  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    display: none;
  }
`;

const renderNav = nav => {
  const navTitle = nav.title;
  const navItems = map(nav.links, item =>
    item.isExternal ? (
      <Text
        as="a"
        mb="8px"
        href={item.to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.name}
      </Text>
    ) : (
      <Link passHref href={item.to}>
        <Text as="a" mb="8px">
          {item.name}
        </Text>
      </Link>
    )
  );

  return (
    <>
      <Text as="h2" mb="16px" color="#FFFFFF" fontSize="14px" fontWeight="bold">
        {navTitle}
      </Text>
      <NavItemContainer mb="40px" flexDirection="column">
        {navItems}
      </NavItemContainer>
    </>
  );
};

const Footer = () => (
  <StyledFooter p={['45px 34px', '45px 110px', '90px 160px']}>
    <Content
      justifyContent="space-between"
      flexWrap={['wrap', 'no-wrap']}
      flexDirection={['column', 'row']}
      mb="30px"
    >
      <Col
        flexDirection={['row', 'column']}
        width={['100%', 'auto']}
        justifyContent={['space-between', 'flex-start']}
        alignItems={['center', 'flex-start']}
        flexWrap="wrap"
      >
        <Col
          width={['100%', 'auto']}
          flexDirection="column"
          alignItems="flex-start"
        >
          <img
            css="cursor: pointer"
            src="/static/logo-small.svg"
            alt="logo-small"
          />
          <Col flexDirection="column">
            <a
              target="blank"
              style={{ display: 'block' }}
              href="https://goo.gl/maps/eAHajBr4QELeBxj2A"
            >
              <Text as="p" fontSize="16px" mt="30px" mb="8px">
                Keizersgracht 620
              </Text>
              <Text as="p" fontSize="16px" mb="30px">
                1017 ER Amsterdam
              </Text>
            </a>
          </Col>
        </Col>
        <Col mx={0} alignSelf={['flex-end', 'flex-start']}>
          <TextButton
            mb={['40px', '80px']}
            color="blueLight"
            alignSelf={['flex-end', 'flex-start']}
            external
            target="blank"
            href="/contact"
          >
            Get in touch
          </TextButton>
        </Col>
        <Image
          css="cursor: pointer"
          src="/static/xxx.svg"
          alt="three crosses (amsterdam)"
        />
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        {map(leftNav, nav => renderNav(nav))}
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        {map(centerNav, nav => renderNav(nav))}
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        {map(rightNav, nav => renderNav(nav))}
      </Col>
    </Content>
    <TradeMarkContainer justifyContent="center">
      <Text as="p" fontSize="14px" color="rgba(255, 255, 255, 0.5)">
        &copy; 2019 ONE. is a trade brand of New Amsterdam Capital B.V.
      </Text>
    </TradeMarkContainer>
  </StyledFooter>
);

export default Footer;
