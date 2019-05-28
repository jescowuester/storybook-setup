import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon, Section } from 'components';

const Job = ({ jobTitle, jobTitlePrefix, location, company, liked }) => (
  <Flex>
    <Flex justifyContent="space-between">
      <Text color="redLight" as="h5">
        {jobTitlePrefix} <Text as="span">{jobTitle}</Text>
      </Text>
      <Icon icon={['far', 'heart']} />
    </Flex>
  </Flex>
);

const Jobs = ({ buttonText, title, jobs }) => {
  return (
    <Section>
      <Text as="h1">{title}</Text>
      <Button secondary>{buttonText}</Button>
    </Section>
  );
};

Jobs.propTypes = {
  buttonText: PropTypes.string,
  title: PropTypes.string,
  jobs: PropTypes.array.isRequired
};

export default Jobs;
