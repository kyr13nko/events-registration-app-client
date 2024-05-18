import "modern-normalize";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 * {
    box-sizing: border-box;
  }

  :root {
    --color-bg: #F8F8F8;
    
    --color-text: #121417;

    --color-primary: #F4C550;
    --color-secondary: #FFDC86;

    --color-white: #ffffff;
    --color-grey: #8A8A89;
    --color-green: #38CD3E;
    --color-red: #FF0000;


    --transition: all 400ms ease;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    line-height: 1.5;
    font-optical-sizing: auto;
    margin: 0;

    -webkit-font-smoothing: antialiased;

    background-color: var(--color-bg);
    color: var(--color-text);

    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img {
    display: block;
    width: 100%;
  }

  button {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 1rem;
  margin: 0 auto;
`;
