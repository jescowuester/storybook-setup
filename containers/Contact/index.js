import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import _ from 'lodash';

import { Box, Button, Text, Flex, Input, Section } from 'components';
import { Maps } from 'containers';

const ContactContainer = styled(props => <Flex {...props} />)``;

const AddressContainer = styled(props => <Flex {...props} />)``;
const LocationContainer = styled(props => <Flex {...props} />)``;
const HoursContainer = styled(props => <Flex {...props} />)``;

const MapsContainer = styled(props => <Flex {...props} />)`
  width: 100%;
`;

const Form = styled(props => <Flex {...props} />)`
  flex-direction: column;
  width: 455px;
  max-width: 90%;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: purple;
`;

const Contact = ({ content: { location, text, form, address } }) => {
  const { title, subTitle, disclaimer } = text;
  const { title: addressTitle, location: addressLocation, hours } = address;

  const disclaimerTemplate = _.template(disclaimer.txt);

  const DisclaimerLink = (to, link) => (
    <StyledLink passHref href={to}>
      <a> {link} </a>
    </StyledLink>
  );

  const disclaimerCompiledText = disclaimerTemplate({
    link: DisclaimerLink(disclaimer.to, disclaimer.link)
  });

  const renderInputs = () =>
    _.map(form, f => (
      <Input
        key={f.id}
        name={`${f.name}-input`}
        type={f.type}
        placeholder={f.placeholder}
        mb="30px"
      />
    ));

  return (
    <Section>
      <ContactContainer
        justifyContent={['center', 'space-between']}
        flexDirection={['column', 'row']}
      >
        <Box p={['40px', '100px 86px 160px 100px']}>
          <Text mb="30px" as="h1">
            {title}
          </Text>
          <Text mb="40px" as="h3" fontSize="20px" fontWeight="normal">
            {subTitle}
          </Text>
          <Form>
            {renderInputs()}
            <Text mb="40px" fontSize="14px" as="p">
              {disclaimerCompiledText}
              {DisclaimerLink(disclaimer.to, disclaimer.link)}
            </Text>
            <Button secondary width="132px" type="submit">
              submit
            </Button>
          </Form>
        </Box>
        <>
          <Maps location={location} />
          <MapsContainer
            id="map"
            maxWidth={['100%', '635px']}
            height={['431px', '862px']}
            alignSelf="center;"
          />
        </>
      </ContactContainer>
      <AddressContainer>
        <Box p={['80px 40px', '100px 86px 160px 100px']}>
          <Text as="h1">{addressTitle}</Text>
          <Flex mt="40px" flexDirection={['column', 'row', 'row']} flexWrap={['wrap', 'nowrap']}>
            <LocationContainer
              flexDirection="column"
              mr="80px"
              maxWidth={['100%', '360px']}
            >
              <Text as="h3" fontSize="24px" mb="20px">
                {addressLocation.title}
              </Text>
              <Text as="p" color="#52606D">
                {`${addressLocation.street} ${addressLocation.number}`}
              </Text>
              <Text as="p" color="#52606D">
                {`${addressLocation.zipcode} ${addressLocation.city}`}
              </Text>
            </LocationContainer>
            <HoursContainer mt={["40px", 0, 0]} flexDirection="column" maxWidth={['100%', '360px']}>
              <Text as="h3" fontSize="24px" mb="20px">
                {hours.title}
              </Text>
              <Flex color="#52606D">
                <Text as="p" mr="30px">
                  Mon - Fri
                </Text>
                <Text as="p">{`${hours.week.start} ${hours.week.end}`}</Text>
              </Flex>
              <Flex color="#52606D">
                <Text as="p" mr="30px">
                  Sat - Sun
                </Text>
                <Text as="p">{hours.weekend}</Text>
              </Flex>
            </HoursContainer>
          </Flex>
        </Box>
      </AddressContainer>
    </Section>
  );
};

export default Contact;
