import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '..';

storiesOf('Button', module)
  .add('primary', () => <Button primary>test</Button>)
  .add('secondary', () => <Button secondary>test</Button>);
