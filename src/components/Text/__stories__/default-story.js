import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Text, SecondaryText, Header } from '../..';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('regular text', () => {
    const dynamicText = text('Text', 'Regular text');
    return <Text fontSize={text('fontSize', 'h500')}>{dynamicText}</Text>;
  })
  .add('secondary text', () => {
    const dynamicText = text('Text', 'Secondary text');
    return (
      <SecondaryText fontSize={text('fontSize', 'h300')}>
        {dynamicText}
      </SecondaryText>
    );
  })
  .add('H1', () => {
    const dynamicText = text('Text', 'Heading (H1)');
    return <Header color={text('colorProp', 'redDark')}>{dynamicText}</Header>;
  });
