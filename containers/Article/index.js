import React from 'react';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { ShareButton, Section, Text, Flex, Box, Icon } from 'components';
import styled from 'styled-components';
import Link from 'next/link';

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from 'react-share';

const FormatedText = styled.div`
  width: 60%;
  color: ${p => p.theme.colors.blackLight};
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
  }
  h2 {
    font-family: Roboto;
    text-transform: none;
    margin-bottom: 1.5rem;
    font-size: 26px;
  }
  .blog-post__quote {
    font-size: 22px;
    font-weight: normal;
    font-style: italic;
    text-align: justify;
    color: ${p => p.theme.colors.greyDarker};
    margin-bottom: 100px;
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

const Article = ({
  router,
  content: { text, shareText, title, backButton, backHref }
}) => {
  return (
    <Section>
      <Flex
        textAlign="center"
        flexDirection="column"
        p={['20px 50px 40px', '60px 350px 90px', '60px 350px 90px']}
        bg="greyLighter"
        width="100%"
      >
        <Link passHref href={backHref}>
          <BackButton>
            <Icon mr="8px" icon={['far', 'long-arrow-left']} />
            <Text as="span"> {backButton} </Text>
          </BackButton>
        </Link>
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
            <LinkedinShareButton url={`https://oneworks.co/${router.route}`}>
              <ShareButton icon={['fab', 'linkedin-in']} />
            </LinkedinShareButton>
            <FacebookShareButton
              hashtag="oneworks"
              url={`https://oneworks.co/${router.route}`}
            >
              <ShareButton mx="30px" icon={['fab', 'facebook-f']} />
            </FacebookShareButton>
            <TwitterShareButton url={`https://oneworks.co/${router.route}`}>
              <ShareButton icon={['fab', 'twitter']} />
            </TwitterShareButton>
          </Flex>
        </Box>
      </Flex>
    </Section>
  );
};

Article.propTypes = {
  content: PropTypes.objectOf({
    text: PropTypes.string,
    shareText: PropTypes.string,
    backHref: PropTypes.string
  }).isRequired
};

export default withRouter(Article);
