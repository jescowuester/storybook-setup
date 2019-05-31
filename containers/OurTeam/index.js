import React from 'react';
import { Section, Text, Flex, Box, TextButton } from 'components';
import styled from 'styled-components';

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-top: 100%;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position: center;
`;

const TeamMember = ({ img, name, text, buttonText, href }) => (
  <Box flexBasis={['100%', '50%', '50%']}>
    <Flex m="30px" flexDirection="column">
      <Img img={img} />
      <Text fontSize="24px" mt="20px" mb="20px" as="h4">
        {name}
      </Text>
      <Text mb="30px" as="p">
        {text}
      </Text>
      <TextButton target="blank" external href={href} secondary>
        {buttonText}
      </TextButton>
    </Flex>
  </Box>
);

const OurTeam = ({ content: { title, text, teamMembers } }) => {
  return (
    <Section>
      <Box mb="80px" width={['100%', '100%', '55%']}>
        <Text mb="40px" as="h3">
          {title}
        </Text>
        <Text color="blackLight" as="p">
          {text}
        </Text>
      </Box>
      <Flex mx="-30px" justifyContent="space-between" flexWrap="wrap">
        {teamMembers.map(member => (
          <TeamMember key={member.name} {...member} />
        ))}
      </Flex>
    </Section>
  );
};

export default OurTeam;
