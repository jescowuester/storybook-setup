import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'components/Icon/library';
import { Layout } from 'components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/fonts.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />
          <GlobalStyle />
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
