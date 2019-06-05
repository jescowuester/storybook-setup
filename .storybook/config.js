import { configure, addDecorator } from '@storybook/react';
import React, { useRef } from 'react';
import { addParameters } from '@storybook/react';
import storybookOfAms from './storyOfAmsTheme';
import { action } from '@storybook/addon-actions';

addParameters({
  options: {
    theme: storybookOfAms
  }
});

//styles & fonts
import GlobalStyle from '../styles/GlobalStyle';
import '../styles/fonts.css';

//fontawesome
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'components/Icon/library';

//theme provider
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);

//fake next router
import Router from 'next/router';
const mockedRouter = {
  push: path => {
    console.log(path);
    action('navigated to')(path);
    return new Promise((reject, resolve) => resolve());
  },
  prefetch: () => {}
};
Router.router = mockedRouter;

// todo preventDefault for firefox
// import Link from 'next/link';
// console.log('link', Link);

// load stories & add decorator
function loadStories() {
  req.keys().forEach(filename => req(filename));
  addDecorator(story => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {story()}
      </>
    </ThemeProvider>
  ));
}

configure(loadStories, module);
