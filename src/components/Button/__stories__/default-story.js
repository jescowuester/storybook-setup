import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { PrimaryButton, SecondaryButton } from '../..';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
    const btnText = text('Button Text', 'Book a call');
    return <PrimaryButton>{btnText}</PrimaryButton>;
  })
  .add('secondary', () => {
    const btnText = text('Button Text', 'Find opportunities here');
    return <SecondaryButton>{btnText}</SecondaryButton>;
  });
