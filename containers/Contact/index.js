import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Box, Button, Text, Flex, Input, Section } from 'components';
import { Maps } from 'containers';

const ContactContainer = styled(Flex)`
  justify-content: space-between;
`;

const AddressContainer = styled(Flex)``;
const LocationContainer = styled(Flex)`
  max-width: 360px;
  margin-right: 124px;
  flex-direction: column;
`;
const HoursContainer = styled(Flex)`
  max-width: 360px;
  flex-direction: column;
`;

const MapsContainer = styled(Flex)`
  width: 635px;
  min-height: 862px;
`;

const Form = styled(Flex)`
  flex-direction: column;
  width: 455px;
`;

const Contact = ({ content: { location, text, form, address } }) => {
  const { title, subTitle, smallTxt } = text;
  const { title: addressTitle, location: addressLocation, hours } = address;

  const renderInputs = () =>
    _.map(form, f => (
      <Input
        name={`${f.name}-input`}
        type={f.type}
        placeholder={f.placeholder}
        mb="30px"
      />
    ));

  return (
    <Section>
      <ContactContainer>
        <Box p="100px 86px 100px 160px">
          <Text mb="30px" as="h1">
            {title}
          </Text>
          <Text mb="40px" as="h3" fontSize="20px" fontWeight="normal">
            {subTitle}
          </Text>
          <Form>
            {renderInputs()}
            <Text
              mb="40px"
              fontSize="14px"
              as="p"
              dangerouslySetInnerHTML={{ __html: smallTxt }}
            />
            <Button secondary width="132px" type="submit">
              submit
            </Button>
          </Form>
        </Box>
        <>
          <Maps location={location} />
          <MapsContainer id="map" />
        </>
      </ContactContainer>
      <AddressContainer>
        <Box p="100px 86px 100px 160px">
          <Text as="h1">{addressTitle}</Text>
          <Flex mt="40px">
            <LocationContainer mr="20px">
              <Text as="h3" fontSize="24px" mb="20px">
                {addressLocation.title}
              </Text>
              <Text as="p">
                {`${addressLocation.street} ${addressLocation.number}`}
              </Text>
              <Text as="p">
                {`${addressLocation.zipcode} ${addressLocation.city}`}
              </Text>
            </LocationContainer>
            <HoursContainer>
              <Text as="h3" fontSize="24px" mb="20px">
                {hours.title}
              </Text>
              <Flex>
                <Text as="p" mr="30px">
                  Mon - Fri
                </Text>
                <Text as="p">{`${hours.week.start} ${hours.week.end}`}</Text>
              </Flex>
              <Flex>
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
