import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Button } from '../..';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
    const btnText = text('Button Text', 'Book a call');
    return <Button primary>{btnText}</Button>;
  })
  .add('secondary', () => {
    const btnText = text('Button Text', 'Find opportunities here');
    return <Button secondary>{btnText}</Button>;
  });
