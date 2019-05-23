import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from '..';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => <Button primary>Book a call</Button>)
  .add('secondary', () => <Button secondary>Find opportunities here</Button>)
  .add('with dynamic button text', () => {
    const btnText = text('Button Text', 'Find opportunities here');
    return <Button secondary>{btnText}</Button>;
  });
