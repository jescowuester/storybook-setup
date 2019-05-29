import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Text, Flex, Section } from 'components';

const LogoContainer = styled.div`
  flex-basis: 33%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
  img {
    width: 200px;
    height: auto;
  }
`;

const InGreatCompany = ({ content: { title, text, companies } }) => (
  <Section
    p={['50px 40px 10px', '50px 60px 10px', '130px 160px 30px']}
    textAlign="center"
  >
    <Text mb="30px" as="h3">
      {title}
    </Text>
    <Text mx={['5%', '10%', '20%']} mb="120px" as="p">
      {text}
    </Text>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {companies.map(({ name, href, img, _id }) => (
        <LogoContainer key={_id}>
          {/* <Link href={href}> */}
          {/* <a target="blank"> */}
          <img src={img} alt={name} />
          {/* </a> */}
          {/* </Link> */}
        </LogoContainer>
      ))}
    </Flex>
  </Section>
);

export default InGreatCompany;
