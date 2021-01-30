import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-image: linear-gradient(to right, rgb(24, 35, 44), rgb(53, 76, 88));
  }
  body, input {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }
   
`;
