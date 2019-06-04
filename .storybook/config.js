import { configure, addDecorator } from '@storybook/react';
import React from 'react';

//styles
import GlobalStyle from '../styles/GlobalStyle';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/fonts.css';

//theme provider
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  addDecorator(story => (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', padding: '1rem' }}>
        <GlobalStyle />
        {story()}
      </div>
    </ThemeProvider>
  ));
}

configure(loadStories, module);
