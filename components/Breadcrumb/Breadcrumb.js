import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Link from 'next/link';

const BreadcrumbStyles = styled.div`
  a {
    font-weight: 400;
    color: ${p => p.theme.colors.greyText};
    text-transform: capitalize;
    &:last-child {
      color: ${p => p.theme.colors.red};
    }
  }
`;

const Breakcrumb = ({ path: customPath, router }) => {
  const path = customPath || router.pathname;

  const splitPath = path.split('/').slice(1);
  return (
    <div>
      <BreadcrumbStyles>
        {splitPath.map((pathName, index) => (
          <Link href={splitPath.slice(0, index + 1).join('/')}>
            <a>
              {` /  `}
              {pathName}
            </a>
          </Link>
        ))}
      </BreadcrumbStyles>
    </div>
  );
};

export default withRouter(Breakcrumb);
