import React from 'react';
import PropTypes from 'prop-types';
import { ShareButton, Section, Text, Flex, Box } from 'components';
import styled from 'styled-components';

const FormatedText = styled.div`
  width: 60%;
  color: ${p => p.theme.colors.blackLight};
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
  }
  p {
    margin-bottom: 1rem;
  }
  img{
    margin: 30px 0 40px;
    max-width: 100%;
  }
`;

const Article = ({ content: { text, shareText } }) => {
  return (
    <Section p={["60px 40px","80px 40px","80px 160px"]}>
      <Flex flexDirection={["column","column", "row"]} >
        <FormatedText dangerouslySetInnerHTML={{ __html: text }} />
        <Box ml={[0,0,"100px"]}>
        <Text mb="30px" as='h4' fontSize="24px">{shareText}</Text>
        <Flex>
        <ShareButton icon={['fab', 'linkedin-in']} />
          <ShareButton mx='30px' icon={['fab', 'facebook-f']} />
          <ShareButton icon={['fab', 'twitter']} />
        </Flex>
        </Box>
      </Flex>
    </Section>
  );
};

Article.propTypes = {
  content: PropTypes.objectOf({
    text: PropTypes.string,
    shareText: PropTypes.string
  })
};

export default Article;
