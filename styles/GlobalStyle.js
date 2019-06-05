import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* defaults */

html, body {
  font-family: 'FaktPro';
  font-weight: 400;

  box-sizing: border-box;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100%;
  width: 100%;

  margin: 0;
  padding: 0;
}

#__next {
  min-height: 100%;
  position: relative;
}

p {
  font-size: ${p => p.theme.font.sizes.desktop.p};
}

h1 {
  font-size: ${p => p.theme.font.sizes.desktop.h1};
}

h2 {
  font-size: ${p => p.theme.font.sizes.desktop.h2};
}

h3 {
  font-size: ${p => p.theme.font.sizes.desktop.h3};
}

h4 {
  font-weight: 700;
  font-size: ${p => p.theme.font.sizes.desktop.h4};
}

hr {
  border: none;
  border-bottom: 2px solid ${p => p.theme.colors.greyLight};
  width: 100%;
}

@media (max-width: ${p => p.theme.breakpoints[1]}){
  p {
    font-size: ${p => p.theme.font.sizes.mobile.p};
  }

  h1 {
    font-size: ${p => p.theme.font.sizes.mobile.h1};
  }

  h2 {
    font-size: ${p => p.theme.font.sizes.mobile.h2};
  }

  h3 {
    font-size: ${p => p.theme.font.sizes.mobile.h3};
  }

  h4 {
    font-size: ${p => p.theme.font.sizes.mobile.h4};
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
