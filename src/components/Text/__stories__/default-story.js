import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Text } from '../..';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => <Text>Book a call</Text>)
  .add('secondary', () => <Text>Find opportunities here</Text>)
  .add('with dynamic button text', () => {
    const btnText = text('Button Text', 'Find opportunities here');
    return <Text secondary>{btnText}</Text>;
  });
