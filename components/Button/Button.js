import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';
import { space } from 'styled-system';
import { Icon } from 'components';
import Link from 'next/link';

const StyledButton = styled.button`
  &.primary {
    box-shadow: 0px 2px 15px 0px rgba(215, 43, 71, 0.6);
    color: ${p => p.theme.colors.white};
    background: ${p => p.theme.colors.red};
    border: 2px ${p => p.theme.colors.red} solid;

    &:hover {
      box-shadow: 0px 2px 10px 0px rgba(215, 43, 71, 0.5);
      background: ${p =>
        p.secondary ? p.theme.colors.white : p.theme.colors.redDark};
    }

    &:focus {
      &::after {
        border: 1px dotted ${p => p.theme.colors.white};
      }
    }
    &:active {
      box-shadow: 0px 2px 2px 0px rgba(215, 43, 71, 0.3);
      transition: box-shadow 0.05s;
    }
  }

  width: ${p => (p.isBlock ? '100%' : 'auto')};
  &.secondary {
    border: 2px ${p => p.theme.colors.red} solid;
    color: ${p => p.theme.colors.red};
    background: transparent;
    &:hover {
      box-shadow: 0px 2px 10px 0px rgba(215, 43, 71, 0.3);
    }

    &:focus {
      &::after {
        border: 1px dotted ${p => p.theme.colors.red};
      }
    }
  }

  &.tertiary {
    border: 2px ${p => p.theme.colors.white} solid;
    color: ${p => p.theme.colors.red};
    background: ${p => p.theme.colors.white};
    &:hover {
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);
    }

    &:focus {
      &::after {
        border: 1px dotted ${p => p.theme.colors.red};
      }
    }
  }

  &:focus {
    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border-radius: 4px;
    }
  }

  &:hover {
    .arrow {
      svg {
        transform: translate3d(4px, 1px, 0);
      }
    }
  }
  display: inline-block;
  position: relative;
  padding: 14px 20px;
  font-weight: 700;
  border-radius: 4px;
  outline: none;

  transition: box-shadow 0.2s, background 0.2s;

  ${space}
`;

const Arrow = styled(Icon).attrs({
  className: 'arrow',
  icon: ['far', 'long-arrow-right'],
  ml: '5px'
})`
  svg {
    transform: translate3d(0, 1px, 0);
    transition: transform 0.18s cubic-bezier(0.23, 1, 0.32, 1);
  }
`;

const Button = ({
  children,
  secondary,
  tertiary,
  arrow,
  isLink,
  isA,
  href,
  as,
  ...props
}) => {
  if (isLink) {
    return (
      <Link prefetch passHref href={href} as={as || href}>
        <StyledButton
          as="a"
          className={getClassName(secondary, tertiary)}
          {...props}
        >
          {children}
        </StyledButton>
      </Link>
    );
  }

  if (isA) {
    return (
      <StyledButton
        as="a"
        href={href}
        className={getClassName(secondary, tertiary)}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }

  if (arrow) {
    return (
      <StyledButton
        as={as}
        className={getClassName(secondary, tertiary)}
        {...props}
      >
        {children} <Arrow />
      </StyledButton>
    );
  }

  return (
    <StyledButton
      as={as}
      className={getClassName(secondary, tertiary)}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const getClassName = (secondary, tertiary) => {
  if (secondary) return 'secondary';
  if (tertiary) return 'tertiary';
  return 'primary';
};

export default Button;
