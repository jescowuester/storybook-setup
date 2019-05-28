import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Box, Button, Text, Flex, Input, Section } from 'components';
import { Maps } from 'containers';

const ContactContainer = styled(Flex)`
  justify-content: space-between;
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
  const { title: addressTitle, location: adressLocation, hours } = address;

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
            <Button secondary width="132px" type="submit"> submit </Button>
          </Form>
        </Box>
        <>
          <Maps location={location} />
          <MapsContainer id="map" />
        </>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
