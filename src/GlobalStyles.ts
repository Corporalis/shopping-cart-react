import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    background-repeat: no-repeat;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-x: hidden;
    -ms-overflow-style: scrollbar;
    scroll-behavior: smooth;
  }

  body,
  html {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    -webkit-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 2;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    line-height: 1.2;
    margin-top:0;
    margin-bottom: 1.4rem;
    color: #000;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
