import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reset } from 'styled-reset';
import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Reset />
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
