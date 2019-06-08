import React from 'react';
import styled, { themeGet } from 'styled-components';
import { Section, Button, Flex, Text } from 'components';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Header = styled.div`
  z-index: 201;
  position: relative;
  text-align: center;
  padding: 50px ${p => p.theme.layout.sideMargin.desktop.lg};
  max-width: ${p => p.theme.maxWidths.default};
  p {
    color: rgba(255, 255, 255, 0.55);
    line-height: 30px;
  }
  strong {
    font-weight: normal;
    color: rgba(255, 255, 255, 1);
  }
`;

const Banner = styled.div`
  width: 100%;
  border-radius: 6px;
  background-image: url(${p => p.img}) no-repeat center center;
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Home = () => {
  return (
    <Flex flexDirection="column">
      <Header>
        <Text as="p">
          Wynand Fockink produces more than{' '}
          <strong>70 Dutch liqueurs and genevers</strong> which can be tasted{' '}
          <strong>in the authentic 17 century environment</strong>. Tasting our
          products is done in the old fashioned way of bowing to the drink and
          slurping the first sip from a traditional tulip glass. Cheers!
        </Text>
      </Header>
      <Banner img="/static/home_banner.png" />
    </Flex>
  );
};

export default Home;
