import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import centered from '@storybook/addon-centered/react';

import Button from './Button';

storiesOf('Button', module)
  .addDecorator(centered)
  .add('default', () => (
    <>
      <Button onClick={action('clicked')}>cool 😎 Button</Button>
    </>
  ))
  .add('secondary', () => (
    <Button secondary onClick={action('clicked')}>
      cool 😎 Button
    </Button>
  ))
  .add('tertiary', () => (
    <Button tertiary onClick={action('clicked')}>
      cool 😎 Button
    </Button>
  ))
  .add('with arrow', () => (
    <>
      <Button m="20px" arrow>
        Button
      </Button>
      <Button m="20px" secondary arrow>
        Button
      </Button>
      <Button m="20px" tertiary arrow>
        Button
      </Button>
    </>
  ))
  .add('as Link', () => (
    <Button isLink href="/">
      Button isLink
    </Button>
  ))
  .add('as a', () => (
    <Button isA iconRight={['far', 'long-arrow-right']}>
      Button isA
    </Button>
  ))
  .add('isBlock (full width)', () => (
    <Button isBlock iconRight={['far', 'long-arrow-right']}>
      Button isBlock
    </Button>
  ))
  .add('custom width', () => (
    <Button px="200px" iconRight={['far', 'long-arrow-right']}>
      Button custom padding
    </Button>
  ));
