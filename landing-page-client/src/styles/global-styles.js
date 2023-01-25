import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    ${({ theme }) => css`
    color:${theme.primary};
    background:${theme.backgroundColor.main};
    font-family:sans-serif;
    `}
  }

`;
