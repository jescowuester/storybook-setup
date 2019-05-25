import { Text, Section, Flex, Box } from "components";

const FixRecruitmentGame = () => {
  return (
    <Section p="160px 255px">
      <Text mb="40px" as="h3">
        Fixing the recruitment game.
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Box flexBasis="50%">
          <Text as="p">
            We have the recruitment knowledge, man power, experience, tools and
            the network to place the perfect candidates in the right roles and
            support you on your additional a needs along the way. We’re on a
            mission.
          </Text>
        </Box>
        <Box flexBasis="40%" alignItems="center">
          <Text lineHeight="46px" fontSize="36px" color="blue" as="p">
            We’re on a mission. As One. Are you in?
          </Text>
        </Box>
      </Flex>
    </Section>
  );
};

export default FixRecruitmentGame;
