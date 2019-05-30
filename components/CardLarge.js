import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Flex from './Flex';
import Box from './Box';
import Text from './Text';
import TextButton from './TextButton';

const Img = styled.div`
  min-width: 50%;
  min-height: 600px;
  background: url(${p => p.img}) no-repeat center;
  background-size: cover;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    height: 0;
    padding-top: 56%;
  }
`;

const TextSection = styled.div`
  font-size: 18px;
  color: ${p => p.theme.colors.blackLight};
  p {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 30px;
    }
  }
`;

const StyledFlex = styled(Flex)`
  border-radius: 5px;
  overflow: hidden;
`;

const CardLarge = ({
  img,
  title,
  text,
  buttonText,
  secondary,
  reverse,
  href
}) => {
  const flexDirection = ['column', 'column', reverse ? 'row-reverse' : 'row'];

  return (
    <StyledFlex
      as="a"
      href={href}
      width={['100%', '100%', 'auto']}
      flexDirection={flexDirection}
      mb={['40px', '40px', '80px']}
      mx={[0, 0, '30px']}
    >
      <Img img={img} />
      <Box bg="white" p={['50px 40px', '50px 40px', '100px 80px']}>
        <Text mb="40px" as="h4">
          {title}
        </Text>
        <TextSection dangerouslySetInnerHTML={{ __html: text }} />
        <Box mt="37px">
          <Link passHref href={href}>
            <TextButton secondary={secondary}>{buttonText}</TextButton>
          </Link>
        </Box>
      </Box>
    </StyledFlex>
  );
};

CardLarge.defaultProps = {
  buttonText: 'Learn more',
  secondary: false,
  reverse: false,
  href: '/about'
};

CardLarge.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  secondary: PropTypes.bool,
  reverse: PropTypes.bool,
  href: PropTypes.string
};

export default CardLarge;
