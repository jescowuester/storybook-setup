import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { map, template } from 'lodash';
import axios from 'axios';
import {
  Box,
  Button,
  TextButton,
  Text,
  Flex,
  Input,
  Section
} from 'components';
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

const reducer = (state, { type, target, value }) => {
  switch (type) {
    case 'MODIFY':
      return { ...state, [target]: value };
    default:
      throw new Error(
        'There seems to be an error, are all your fields specified in init?'
      );
  }
};

const Contact = ({ content: { location, text, form, address } }) => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    phone: ''
  });
  const [formSent, setFormSent] = useState(false);

  const { title, subTitle, disclaimer } = text;
  const { title: addressTitle, location: addressLocation, hours } = address;

  // const disclaimerTemplate = template(disclaimer.txt);

  const DisclaimerLink = (to, link) => (
    <StyledLink passHref href={to}>
      <a> {link} </a>
    </StyledLink>
  );

  // const disclaimerCompiledText = disclaimerTemplate({
  //   link: DisclaimerLink(disclaimer.to, disclaimer.link)
  // });

  const renderInputs = () =>
    map(form, f => (
      <Input
        width="100%"
        required
        key={f.id}
        name={`${f.name}-input`}
        type={f.type}
        placeholder={f.placeholder}
        mb="30px"
        onChange={e => {
          dispatch({ type: 'MODIFY', target: f.name, value: e.target.value });
        }}
      />
    ));

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('https://careers.oneworks.co/api/nacho/v1/collections/contacts', {
        ...state
      })
      .then(res => {
        if (res.status === 200) {
          setFormSent(true);
        }
      });
  };

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

          <form onSubmit={onSubmit}>
            <Form alignItems="flex-start">
              {renderInputs()}
              <Text mb="40px" fontSize="14px" as="p">
                {disclaimer.txtStart}
                {DisclaimerLink(disclaimer.to, disclaimer.link)}
                {disclaimer.txtEnd}
              </Text>
              <Flex flexWrap="wrap" alignItems="center" m="-15px">
                <Button m="15px" secondary disabled={formSent} type="submit">
                  {formSent ? 'thank you for your submission' : 'Submit'}
                </Button>
                <TextButton
                  m="15px"
                  external
                  secondary
                  target="blank"
                  href="https://cal.mixmax.com/kaan-one./catch-up-call"
                >
                  Or schedule a call
                </TextButton>
              </Flex>
            </Form>
          </form>
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
          <Flex
            mt="40px"
            flexDirection={['column', 'row', 'row']}
            flexWrap={['wrap', 'nowrap']}
          >
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
            <HoursContainer
              mt={['40px', 0, 0]}
              flexDirection="column"
              maxWidth={['100%', '360px']}
            >
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
