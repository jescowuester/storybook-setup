import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Text } from '../..';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('regular text', () => {
    const dynamicText = text('Text', 'Regular text');
    return <Text>{dynamicText}</Text>;
  })
  .add('secondary text', () => {
    const dynamicText = text('Text', 'Secondary text');
    return <Text secondary>{dynamicText}</Text>;
  })
  .add('H1', () => {
    const dynamicText = text('Text', 'Heading (H1)');
    return <Text type="h1">{dynamicText}</Text>;
  })
  .add('H2', () => {
    const dynamicText = text('Text', 'Heading (H2)');
    return <Text type="h2">{dynamicText}</Text>;
  })
  .add('H3', () => {
    const dynamicText = text('Text', 'Heading (H3)');
    return <Text type="h3">{dynamicText}</Text>;
  })
  .add('H4', () => {
    const dynamicText = text('Text', 'Heading (H4)');
    return <Text type="h4">{dynamicText}</Text>;
  })
  .add('H5', () => {
    const dynamicText = text('Text', 'Heading (H5)');
    return <Text type="h5">{dynamicText}</Text>;
  })
  .add('H6', () => {
    const dynamicText = text('Text', 'Heading (H6)');
    return <Text type="h6">{dynamicText}</Text>;
  });
