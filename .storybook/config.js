import { configure, addDecorator } from '@storybook/react';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import React from 'react';

const req = require.context('../src/app/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
}

configure(loadStories, module);
