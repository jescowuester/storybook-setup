import React from 'react';
import { Section, Box, Text, Flex, Button, TextButton } from 'components';
import styled from 'styled-components';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

const Img = styled.div`
  width: 45% !important;
  min-width: 45% !important;
  height: 680px !important;
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

const HiringEasy = ({
  secondary,
  content: { img, images = [], title, text, button }
}) => {
  return (
    <Section bg="greyLighter">
      <Flex>
        <Box
          p={['60px 40px', '60px 40px', '60px 40px', '100px 160px 100px 190px']}
        >
          <Text mb="30px" as="h1">
            {title}
          </Text>
          <Text mb="50px" as="p">
            {text}
          </Text>
          <Button secondary={secondary} mb={['10px', '10px', 0]}>
            {button}
          </Button>
          <TextButton secondary={secondary} ml={[0, '30px', '30px']}>
            Download our pitch
          </TextButton>
        </Box>
        {images.length ? (
          <Box position="relative" minHeight="100%" width="45%" minWidth="45%">
            <Swiper {...swiperProps}>
              {images.map(image => (
                <SwiperImg src={image.img} key={image._id} />
              ))}
            </Swiper>
          </Box>
        ) : (
          <Img src={img} />
        )}
      </Flex>
    </Section>
  );
};

export default HiringEasy;
