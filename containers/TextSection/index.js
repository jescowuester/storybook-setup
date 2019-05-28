import React from 'react';
import { Text, Section, Flex, Box } from 'components';

const formatNewLine = text =>
  text.split('\n').map((item, key) => (
    <Text lineHeight="40px" color="blackLight" as="p" key={key}>
      {item}
    </Text>
  ));

const TextSection = ({ content: { col1, col2, title, tagline } }) => (
  <Section p={['40px', '40px', '160px 255px']}>
    <Text mb="40px" as="h3">
      {title}
    </Text>
    <Flex
      justifyContent="space-between"
      alignItems={col2 ? 'flex-start' : 'center'}
      flexDirection={['column', 'column', 'row']}
    >
      <Box flexBasis="50%">{formatNewLine(col1)}</Box>
      <Box flexBasis="40%" alignItems="center">
        {!!col2 && (
          <Text lineHeight="40px" color="blackLight" as="p" mb="20px">
            {col2}
          </Text>
        )}
        <Text
          mt={['20px', '20px', '0']}
          lineHeight="46px"
          fontSize="36px"
          color="blue"
          as="p"
        >
          {tagline}
        </Text>
      </Box>
    </Flex>
  </Section>
);

export default TextSection;
