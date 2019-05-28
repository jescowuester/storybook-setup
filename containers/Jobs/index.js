import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon, Section, Flex, Box } from 'components';

const Job = ({ jobTitle, jobTitlePrefix, location, company, liked }) => (
  <Flex flexDirection="column" width="100%">
    <Flex mt="40px" mb="20px" width="100%" justifyContent="space-between">
      <Text
        textAlign="start"
        fontSize={['18px', '20px', '22px']}
        fontWeight="400"
        color="redLight"
        as="h5"
      >
        {jobTitlePrefix}{' '}
        <Text fontWeight="600" as="span">
          {jobTitle}
        </Text>
      </Text>

      <Icon
        as="button"
        fontSize="22px"
        color={liked ? 'redLight' : 'black'}
        icon={[liked ? 'fas' : 'far', 'heart']}
      />
    </Flex>
    <Flex
      flexDirection={['column', 'column', 'row']}
      alignItems="flex-start"
      mb="40px"
    >
      <Box>
        <Icon
          fontSize="20px"
          color="greyDark"
          icon={['fas', 'map-marker-alt']}
          mr="12px"
        />
        <Text as="span">{location}</Text>
      </Box>
      <Box mt={['20px', '20px', 0]} ml={[0, 0, '40px']}>
        <Icon
          fontSize="20px"
          color="greyDark"
          icon={['fas', 'users']}
          mr="12px"
        />
        <Text as="span">{company}</Text>
      </Box>
    </Flex>
    <hr />
  </Flex>
);

const Jobs = ({ content: { buttonText, title, jobs } }) => {
  return (
    <Section p={['40px', '40px', '160px']} textAlign="center">
      <Text as="h3" mb="80px">
        {title}
      </Text>
      <hr />
      {jobs.map(({ _id, ...job }) => (
        <Job {...job} key={_id} />
      ))}
      <Button mt="60px" secondary>
        {buttonText}
      </Button>
    </Section>
  );
};

Jobs.propTypes = {
  content: PropTypes.objectOf({
    buttonText: PropTypes.string,
    title: PropTypes.string,
    jobs: PropTypes.array.isRequired
  })
};

export default Jobs;
