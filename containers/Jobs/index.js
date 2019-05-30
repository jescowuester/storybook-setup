import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button, Text, Icon, Section, Flex, Box } from 'components';
import countryCodes from '../../countryCodes';

const slugify = (text = '') =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

const Job = ({ title, address, clientCorporation, liked, id }) => {
  const splitTitle = title.split(' ');
  const jobTitlePrefix = [...splitTitle]
    .slice(0, splitTitle.length - 1)
    .join(' ');
  const jobTitle = splitTitle[splitTitle.length - 1];

  const url = `https://careers.oneworks.co/jobs/${id}/${slugify(title)}`;

  return (
    <Flex flexDirection="column" width="100%">
      <a href={url} target="blank">
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
            <Text as="span">{countryCodes[address.countryID]}</Text>
          </Box>
          <Box mt={['20px', '20px', 0]} ml={[0, 0, '40px']}>
            <Icon
              fontSize="20px"
              color="greyDark"
              icon={['fas', 'users']}
              mr="12px"
            />
            <Text as="span">{clientCorporation.name}</Text>
          </Box>
        </Flex>
        <hr />
      </a>
    </Flex>
  );
};

const Jobs = ({ content: { buttonText, title, jobs, href } }) => {
  const [jobsList, setJobsList] = useState([]);
  // todo get cors permission
  useEffect(() => {
    axios
      .get('https://careers.oneworks.co/api/jobs?company=One.')
      .then(res => setJobsList(res.data.data.data));
  }, []);
  return (
    <Section p={['40px', '40px', '160px']} textAlign="center">
      <Text as="h3" mb="80px">
        {title}
      </Text>
      <hr />
      {jobsList.length &&
        jobsList.slice(0, 3).map(job => <Job {...job} key={job.id} />)}
      <Button as="a" href={href} target="blank" mt="60px" secondary>
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
  }).isRequired
};

export default Jobs;
