import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Text, Flex, TextButton } from 'components';
import { StyledFooter } from 'components/layout/styles';

const leftNav = [
  {
    title: 'Candidates',
    links: [
      { to: '', name: 'Overview', isExternal: false },
      { to: '', name: 'About', isExternal: false }
    ]
  },
  {
    title: 'Clients',
    links: [
      { to: '', name: 'Overview', isExternal: false },
      { to: '', name: 'About', isExternal: false }
    ]
  },
  {
    title: '',
    links: [
      { to: 'Press', name: '', isExternal: false },
      { to: 'Blog', name: '', isExternal: false }
    ]
  }
];

const centerNav = [
  {
    title: 'Quick Links',
    links: [
      { to: '', name: 'Home', isExternal: false },
      { to: '', name: 'News', isExternal: false },
      { to: '', name: 'Contact', isExternal: false }
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
      { to: '', name: 'LinkedIn', isExternal: true },
      { to: '', name: 'Twitter', isExternal: true },
      { to: '', name: 'Instagram', isExternal: true },
      { to: '', name: 'Facebook', isExternal: true }
    ]
  }
];

const TradeMarkContainer = styled(Flex)``;
const Content = styled(Flex)``;
const Col = styled(Flex)``;
const RatingContainer = styled(Flex)``;

const rating = [1, 1, 1, 1, 1, 1, 1, 1, 0.5];

const renderRating = () =>
  _.map(rating, r =>
    r === 1 ? (
      <img css="cursor: pointer" src="/static/star.svg" alt="one-star-rating" />
    ) : (
      <img
        css="cursor: pointer"
        src="/static/half-star.svg"
        alt="half-star-rating"
      />
    )
  );

const Footer = () => (
  <StyledFooter>
    <Content justifyContent="space-between" mb="70px">
      <Col flexDirection="column" alignItems="flex-start">
        <img
          css="cursor: pointer"
          src="/static/logo-small.svg"
          alt="logo-small"
        />
        <Text fontSize="16px" mt="30px">
          Keizersgracht 555
        </Text>
        <Text fontSize="16px" mb="30px">
          1017 DR Amsterdam
        </Text>
        <TextButton mb="80px" color="#94BDF0">
          Get in touch
        </TextButton>
        <img
          css="cursor: pointer"
          src="/static/xxx.svg"
          alt="three crosses (amsterdam)"
        />
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        <Text> col </Text>
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        <Text> col </Text>
      </Col>
      <Col flexDirection="column" alignItems="flex-start">
        <Text> col </Text>
        <Text mt="40px"> 8.6 / 10 </Text>
        <RatingContainer mb="30px">{renderRating()}</RatingContainer>
        <img
          css="cursor: pointer"
          src="/static/google-icon.svg"
          alt="google-logo"
        />
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
