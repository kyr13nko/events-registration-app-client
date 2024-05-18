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

export const Section = styled.section`
  height: 110vh;
`;

export const Title = styled.h1`
  margin: 1rem 0 0.5rem;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  padding-bottom: 2rem;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  width: 280px;

  background-color: var(--color-white);

  border: 1px solid var(--color-primary);
  border-radius: 0.5rem;

  padding: 0.75rem;

  & p {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-grey);
  }
`;
