import React from 'react';
import PropTypes from 'prop-types';
import { ShareButton, Section, Text, Flex, Box, Icon } from 'components';
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
  img {
    margin: 30px 0 40px;
    max-width: 100%;
  }
`;

const BackButton = styled.button`
  color: ${p => p.theme.colors.redLight};
  margin-bottom: 60px;
  font-size: 18px;
  svg {
    transition: transform 0.15s;
  }
  &:hover {
    svg {
      transform: translateX(-8px);
    }
  }
`;

const Article = ({ content: { text, shareText, title, backButton } }) => {
  return (
    <Section>
      <Flex
        textAlign="center"
        flexDirection="column"
        p={['20px 50px 40px', '60px 350px 90px', '60px 350px 90px']}
        bg="greyLighter"
        width="100%"
      >
        <BackButton>
          <Icon mr="8px" icon={['far', 'long-arrow-left']} />
          <Text as="span"> {backButton} </Text>
        </BackButton>
        <Text as="h1">{title}</Text>
      </Flex>
      <Flex
        p={['60px 40px', '80px 40px', '80px 160px']}
        flexDirection={['column', 'column', 'row']}
      >
        <FormatedText dangerouslySetInnerHTML={{ __html: text }} />
        <Box ml={[0, 0, '100px']}>
          <Text mb="30px" as="h4" fontSize="24px">
            {shareText}
          </Text>
          <Flex>
            <ShareButton icon={['fab', 'linkedin-in']} />
            <ShareButton mx="30px" icon={['fab', 'facebook-f']} />
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
