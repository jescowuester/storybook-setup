import React from 'react';
import styled from 'styled-components';
import { space, alignSelf } from 'styled-system';
import Link from 'next/link';
import Icon from './Icon';

const A = styled.a`
  ${space}
  ${alignSelf}
  color: ${({ secondary, color, theme: { colors } }) => {
    if (color) return colors[color];
    if (secondary) {
      return colors.redLight;
    }
    return colors.blueDark;
  }};
  font-size: 20px;
  position: relative;
  white-space: nowrap;
  transition: color 0.2s;

  svg {
    transition: transform 0.2s;
  }

  &:hover {
    opacity: 1;
    color: ${({ secondary, theme: { colors } }) =>
      secondary ? colors.red : colors.blue};

    svg {
      transform: translate3d(5px, 0, 0);
    }
  }
`;

const TextButton = ({ children, external, noLink, ...props }) => {
  const normal = (
    <Link passHref href={props.href}>
      <A {...props}>
        {children}
        <Icon ml="10px" icon={['far', 'long-arrow-right']} />{' '}
      </A>
    </Link>
  );

  const externalButton = (
    <A {...props}>
      {children}
      <Icon ml="10px" icon={['far', 'long-arrow-right']} />{' '}
    </A>
  );

  const noLinkButton = (
    <A as="span" {...props}>
      {children}
      <Icon ml="10px" icon={['far', 'long-arrow-right']} />{' '}
    </A>
  );

  if (external) return externalButton;
  if (noLink) return noLinkButton;
  return normal;
};

export default TextButton;
