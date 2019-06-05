import React from 'react';

import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';

import Breadcrumb from './Breadcrumb';

storiesOf('Breadcrumb', module)
  .addDecorator(centered)
  .add('default', () => (
    <>
      <Breadcrumb path="/home/about/another/path" />
    </>
  ));
