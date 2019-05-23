import React from 'react';
import { Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { ToastContainer } from 'react-toastify';
import styled, { ThemeProvider } from 'styled-components';

import config from '../config';
import { Navigation } from './containers';
import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';

const AppWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: ${props => props.theme.colors.white};
`;

const scrollToTop = () => {
  if (typeof window === 'object') {
    window.scrollTo(0, 0);
  }
  return null;
};

const App = ({ route }) => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <Helmet {...config.app} />

      <Route path="/" component={scrollToTop} />

      <Navigation />

      {renderRoutes(route.routes)}

      <ToastContainer className="toast-container" />

      <GlobalStyle />
    </AppWrapper>
  </ThemeProvider>
);

export default hot(module)(App);
