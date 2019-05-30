import React from 'react';
import { Text, Section, Flex, Box } from 'components';
import PropTypes from 'prop-types';

const formatNewLine = text =>
  text.split('\n').map((item, key) => (
    <Text lineHeight="40px" color="blackLight" as="p" key={key}>
      {item}
    </Text>
  ));

// todo reformat to use setinnerhtml

const TextSection = ({
  secondary,
  content: { col1, col2, title, tagline }
}) => (
  <Section
    bg={secondary ? 'greyLighter' : 'white'}
    p={['80px 40px', '100 150px', '160px 255px']}
  >
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
          color={secondary ? 'redLight' : 'blue'}
          as="p"
        >
          {tagline}
        </Text>
      </Box>
    </Flex>
  </Section>
);

TextSection.defaultProps = {
  secondary: false
};

TextSection.proptTypes = {
  secondary: PropTypes.bool,
  content: PropTypes.objectOf({
    col1: PropTypes.string,
    col2: PropTypes.string,
    title: PropTypes.string,
    tagline: PropTypes.string
  }).isRequired
};

export default TextSection;
