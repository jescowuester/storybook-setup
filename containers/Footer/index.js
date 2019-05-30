import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Link from 'next/link';

import { Text, Flex, TextButton } from 'components';
import { StyledFooter } from 'components/layout/styles';

const leftNav = [
  {
    title: 'Candidates',
    links: [
      { to: '/cases', name: 'Overview', isExternal: false },
      { to: '/about', name: 'About', isExternal: false }
    ]
  },
  {
    title: 'Clients',
    links: [
      { to: '/cases', name: 'Overview', isExternal: false },
      { to: '/about', name: 'About', isExternal: false }
    ]
  }
  // {
  //   title: '',
  //   links: [
  //     { to: '/Press', name: '', isExternal: false },
  //     { to: '/Blog', name: '', isExternal: false }
  //   ]
  // }
];

const centerNav = [
  {
    title: 'Quick Links',
    links: [
      { to: '/home', name: 'Home', isExternal: false },
      { to: '/news', name: 'News', isExternal: false },
      { to: '/meet-us', name: 'Contact', isExternal: false }
    ]
  },
  {
    title: 'Legal',
    links: [
      { to: '', name: 'Cookie Policy', isExternal: true },
      { to: '', name: 'Privacy Policy', isExternal: false },
      { to: '', name: 'GDPR', isExternal: true },
      { to: '', name: 'Terms & Conditions', isExternal: false }
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
      { to: '', name: 'Twitter', isExternal: true },
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
  const navItems = _.map(nav.links, item =>
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
      <Link passHref to={item.to}>
        <Text as="a" mb="8px">{item.name}</Text>
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
      mb="70px"
    >
      <Col
        flexDirection={['row', 'column']}
        width={['100%', 'auto']}
        justifyContent={['space-between', 'flex-start']}
        alignItems={['center', 'flex-start']}
        flexWrap="wrap"
      >
        <Col width={['100%', 'auto']} flexDirection="column" alignItems="flex-start">
          <img
            css="cursor: pointer"
            src="/static/logo-small.svg"
            alt="logo-small"
          />
          <Col flexDirection="column">
            <Text fontSize="16px" mt="30px" mb="8px">
              Keizersgracht 555
            </Text>
            <Text fontSize="16px" mb="30px">
              1017 DR Amsterdam
            </Text>
          </Col>
        </Col>
        <Col mx={0} alignSelf={['flex-end', 'flex-start']}>
          <TextButton
            mb={['40px', '80px']}
            color="blueLight"
            alignSelf={['flex-end', 'flex-start']}
            as="a"
            target="blank"
            href="mailto:tim@oneworks.co"
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
        {_.map(leftNav, nav => renderNav(nav))}
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        {_.map(centerNav, nav => renderNav(nav))}
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        {_.map(rightNav, nav => renderNav(nav))}
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
