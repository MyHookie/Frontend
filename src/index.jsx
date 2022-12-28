import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import theme from './styles/Theme';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
