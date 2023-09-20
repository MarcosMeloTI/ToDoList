import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors['gray-600']};
    -webkit-font-smoothing: antialiased;
  }

  input:focus {
    outline: none !important;
  }

`
