import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../src/styles/theme';
import altTheme from './theme';
import GlobalStyle from './globalStyle';

import '../src/assets/fonts/roboto.css';

const themes = [theme, altTheme];

console.log(theme);

const req = require.context('../src/components', true, /\-story.js$/);

addDecorator(withThemesProvider(themes));

function loadStories() {
  req.keys().forEach(filename => req(filename));

  addDecorator(story =>
    <div style={{ width: '100%', padding: '1rem' }} >
      <GlobalStyle />
      {story()}
    </div>
  );
}

configure(loadStories, module);
