import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

import checkTokenValid from './api/tokenValid';
import loginState from './atoms/login';
import isDarkState from './atoms/darkMode';
import { darkTheme, lightTheme } from './styles/Theme';

function App() {
  const queryClient = new QueryClient();

  const isDark = useRecoilValue(isDarkState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const themeType = !isDark ? lightTheme : darkTheme;
  console.log(themeType);

  useEffect(() => {
    (async function () {
      return (await checkTokenValid()) ? setIsLogin(true) : setIsLogin(false);
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeType}>
        <Reset />
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
