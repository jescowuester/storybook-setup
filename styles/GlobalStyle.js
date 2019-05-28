import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:700|Roboto:400,500,700&display=swap');

/* defaults */

html, body{
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  box-sizing: border-box;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
  width: 100%;

  overflow: hidden;

  margin: 0;
  padding: 0;
}

p {
  font-size: ${p => p.theme.font.sizes.large.p};
  line-height: 31px;
}

h1 {
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: ${p => p.theme.font.sizes.large.h1};
  font-weight: bold;
  line-height: 73px;
}

h2 {
  font-size: ${p => p.theme.font.sizes.large.h2};
  text-transform: uppercase;
  ${'' /* letter-spacing: 0.2em; */}
}

h3 {
  font-size: ${p => p.theme.font.sizes.large.h3};
}

h4 {
  font-size: ${p => p.theme.font.sizes.large.h4};
}

hr {
  border: none;
  border-bottom: 2px solid ${p => p.theme.colors.greyLight};
  width: 100%;
}

@media (max-width: ${p => p.theme.breakpoints[1]}){
  p {
  font-size: ${p => p.theme.font.sizes.small.p};
}

h1 {
  font-size: ${p => p.theme.font.sizes.small.h1};
}

h2 {
  font-size: ${p => p.theme.font.sizes.small.h2};
}

h3 {
  font-size: ${p => p.theme.font.sizes.small.h3};
}

h4 {
  font-size: ${p => p.theme.font.sizes.small.h4};
}

}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  appearance: none;
  cursor: pointer;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  &:hover{
    opacity: 0.7;
  }
  transition: opacity 0.1s;
}

ul,
ol {
  list-style: none;
}

img {
  display: inline-block;
  vertical-align: top;
}

pre,
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

`;

export default GlobalStyle;
