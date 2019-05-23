import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Text } from '../..';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('default', () => <Text>Normal text</Text>)
  .add('H1', () => <Text type="h1">This is a heading text</Text>)
  .add('with dynamic button text', () => {
    const dynamicText = text('Text', 'Find opportunities here');
    return <Text secondary>{dynamicText}</Text>;
  });
