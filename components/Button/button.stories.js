import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

storiesOf('Button', module)
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
    <Button /* isLink href="/" */>
      {/* todo: link crashes storybook */}
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
  ));
