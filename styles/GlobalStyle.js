import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:700|Roboto:400,500,700&display=swap');

/* defaults */

html, body{
  font-family: 'Roboto', sans-serif;
  font-weight: 500px;
}
p {
  font-size: 20px;
  line-height: 31px;
}
h1{
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 56px;
  font-weight: bold;
  line-height: 73px;
}
h2 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
h3 {
  font-size: 46px;
}
h4 {
  font-size: 36px;
}

hr {
  border: none;
  border-bottom: 2px solid #5a525e;
}

 /* reset */
html {
  box-sizing: border-box;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  overflow-x: hidden;
  position: relative;
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
  -webkit-appearance: none;
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
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


`;

export default GlobalStyle;
