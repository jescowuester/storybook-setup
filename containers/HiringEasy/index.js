import React from 'react';
import { Section, Box, Text, Flex, Button, TextButton } from 'components';
import styled from 'styled-components';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import Link from 'next/link';

const Img = styled.div`
  width: 45% !important;
  min-width: 45% !important;
  min-height: 680px !important;
  background: url(${p => p.src}) no-repeat center;
  background-size: cover;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`;

const SwiperImg = styled.img`
  width: 100% !important;
  min-width: 100% !important;
  /* height: 680px !important; */
  background: url(${p => p.src}) no-repeat center;
  background-size: auto;
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`;

const swiperProps = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  themeColor: '#fff'
};

const SwiperBox = styled(props => <Box {...props} />)`
  @media (max-width: ${p => p.theme.breakpoints[1]}) {
    display: none;
  }
`;

const HiringEasy = ({
  secondary,
  content: { img, images = [], title, text, button, href, externalHref }
}) => {
  return (
    <Section bg="greyLighter">
      <Flex alignItems="stretch">
        <Box
          p={['60px 40px', '60px 40px', '60px 40px', '100px 160px 100px 160px']}
        >
          <Text mb="30px" as="h1">
            {title}
          </Text>
          <Text mb="50px" as="p">
            {text}
          </Text>
          <Flex m="-10px" flexWrap="wrap" alignItems="center">
            {externalHref ? (
              <Button
                as="a"
                target="blank"
                href={externalHref}
                secondary={secondary}
                m="10px"
              >
                {button}
              </Button>
            ) : (
              <Link passHref href={href || '/about'}>
                <Button as="a" secondary={secondary} m="10px">
                  {button}
                </Button>
              </Link>
            )}
            <TextButton
              external
              target="blank"
              href="https://docsend.com/view/tfewsuf"
              secondary={secondary}
              m="7px"
            >
              Download our pitch
            </TextButton>
          </Flex>
        </Box>
        {images.length ? (
          <SwiperBox
            position="relative"
            minHeight="100%"
            width="45%"
            minWidth="45%"
          >
            <Swiper {...swiperProps}>
              {images.map(image => (
                <SwiperImg src={image.img} key={image._id} />
              ))}
            </Swiper>
          </SwiperBox>
        ) : (
          <Img src={img} />
        )}
      </Flex>
    </Section>
  );
};

export default HiringEasy;
