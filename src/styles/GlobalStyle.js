const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'LINESeedKR-Bd';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Bd.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'LINESeedKR-Rg';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Rg.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'LINESeedKR-Th';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/LINESeedKR-Th.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
  }
  
  *{
    box-sizing: border-box;
  }

  html{
    font-size: 10px;
  }

  body{
    font-family: LINESeedKR-Rg;
    min-height: 100vh;

    box-sizing: border-box;
  }

  a{
    text-decoration:none;
    cursor: pointer;
    color:inherit;
  }

  img{
    width: 100%;
    height: auto;
    vertical-align: top;
  }
  
  button {
    border: none;
    cursor: pointer;
    padding: 0;
    background-color: inherit;
  }

  input {
      &:focus {
      outline:none;
    }
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none; 
  }
`;

export default GlobalStyle;
