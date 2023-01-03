import React, { useCallback, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

import checkTokenValid from './api/tokenValid';
import loginState from './atoms/login';
import themeState from './atoms/theme';
import { darkTheme, lightTheme } from './styles/Theme';

function App() {
  const queryClient = new QueryClient();

  const setIsLogin = useSetRecoilState(loginState);
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  // 사용자 OS 설정에 따라 테마 설정
  const getInitialTheme = useCallback(() => {
    let theme = localStorage.getItem('theme');
    const invalidTheme = theme !== 'light' && theme !== 'dark';

    if (!theme || invalidTheme) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
      theme = matches ? 'dark' : 'light';
    }

    return theme;
  }, []);

  useEffect(() => {
    setThemeMode(getInitialTheme);
  }, []);

  const themeType = themeMode === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    (async function fn() {
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
