import styled from "styled-components";
import Link from "next/link";

import { Text, Flex, Section } from "components";

const LogoContainer = styled.div`
  flex-basis: 33%;
  display: flex;
  justify-content: center;
  margin-bottom: 130px;
`;

const InGreatCompany = ({ content: { title, text, companies } }) => (
  <Section p="130px 160px 30px" textAlign="center">
    <Text mb="30px" as="h3">
      {title}
    </Text>
    <Text mx="20%" mb="120px" as="p">
      {text}
    </Text>
    <Flex flexWrap="wrap">
      {companies.map(({ name, href, img }, key) => (
        <LogoContainer key={key}>
          <Link href={href}>
            <a target="blank">
              <img src={img} alt={name} />
            </a>
          </Link>
        </LogoContainer>
      ))}
    </Flex>
  </Section>
);

export default InGreatCompany;
