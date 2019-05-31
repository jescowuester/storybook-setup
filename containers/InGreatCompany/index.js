import React from 'react';
import styled from 'styled-components';

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

  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    img {
      width: 180px;
    }
    margin-bottom: 60px;
  }

  @media (max-width: ${p => p.theme.breakpoints[0]}) {
    img {
      width: 120px;
    }
    padding: 10px;
    margin-bottom: 40px;
  }
`;

const InGreatCompany = ({ content: { title, text, companies } }) => (
  <Section textAlign="center">
    <Text mb="30px" as="h3">
      {title}
    </Text>
    <Text mx={['5%', '10%', '20%']} mb={['20px', '60px', '120px']} as="p">
      {text}
    </Text>
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {companies.map(({ name, img, _id }) => (
        <LogoContainer key={_id}>
          <img src={img} alt={name} />
        </LogoContainer>
      ))}
    </Flex>
  </Section>
);

export default InGreatCompany;
