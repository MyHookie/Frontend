import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

import checkTokenValid from './api/tokenValid';
import loginState from './atoms/login';
import theme from './styles/Theme';

function App() {
  const queryClient = new QueryClient();
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  useEffect(() => {
    (async function () {
      return (await checkTokenValid()) ? setIsLogin(true) : setIsLogin(false);
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
