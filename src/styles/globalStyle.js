import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body, html {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${p => p.theme.colors.black};
  }

  html {
    &[data-ua*='iPhone'],
    &[data-ua*='iPad'] {
      -webkit-overflow-scrolling: touch;
    }
  }

  body.font-loaded {
    font-family: ${p => p.theme.font.family.primary};
  }

  #react-root {
    height: 100%;
  }

  a, a:focus, a:active,
  button, button:focus, button:active,
  input, input:focus, input:active {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }

  p {
    margin: 0;
    line-height: 1.6;
  }

  .toast-container {
    z-index: 9;
    top: 50px;
    width: 100%;
    left: 0;
    margin-left: 0;
    margin-top: 0;
    padding: 0;
    text-align: center;

    > div {
      padding: 10px 20px;
      min-height: 50px;

      &.toast-success {
        background: ${p => p.theme.colors.blue};
      }

      div {
        font-weight: 500;
        letter-spacing: 0.3px;
        font-family: ${p => p.theme.font.family.primary};
      }
    }
  }
`;

export default GlobalStyle;
