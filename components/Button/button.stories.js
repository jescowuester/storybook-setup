import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

storiesOf('Button', module)
  .add('default', () => <Button onClick={action('clicked')}>😎 Button</Button>)

  .add('secondary', () => (
    <Button secondary onClick={action('clicked')}>
      cool
      <span role="img" aria-label="cool emoji">
        😎
      </span>{' '}
      Button
    </Button>
  ))
  .add('with icon', () => (
    <Button iconRight={['far', 'long-arrow-right']}>Button</Button>
  ))
  .add('as Link', () => (
    <Button iconRight={['far', 'long-arrow-right']}>Button</Button>
  ))
  .add('as a', () => (
    <Button iconRight={['far', 'long-arrow-right']}>Button</Button>
  ));
