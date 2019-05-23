import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    font-family: 'Roboto';
    background: #f7f8f9;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a, a:focus, a:active,
  button, button:focus, button:active,
  input, input:focus, input:active {
    font-family: 'Roboto, sans-serif';
    outline: none;
  }
`;

export default GlobalStyle;
