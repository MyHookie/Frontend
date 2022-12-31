import React, { useCallback, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

import checkTokenValid from './api/tokenValid';
import loginState from './atoms/login';
import themeState from './atoms/darkMode';
import { darkTheme, lightTheme } from './styles/Theme';
import useTheme from './hooks/useTheme';

function App() {
  const queryClient = new QueryClient();

  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [themeMode, setThemeMode] = useRecoilState(themeState);

  // 사용자 OS 설정에 따라 테마 설정
  const getInitialTheme = useCallback(() => {
    let theme = localStorage.getItem('theme');
    const invalidTheme = theme !== 'light' && theme !== 'dark';

    if (!theme || invalidTheme) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
      theme = matches ? 'dark' : 'light';
    }
    console.log('theme', theme);

    return theme;
  }, []);

  useEffect(() => {
    setThemeMode(getInitialTheme);
  }, []);

  // console.log(themeMode);

  const themeType = themeMode === 'light' ? lightTheme : darkTheme;
  // console.log(themeType);

  // const getInitialTheme = useCallback(() => {
  //   let theme = localStorage.getItem('theme');
  //   const invalidTheme = theme !== 'light' && theme !== 'dark';

  //   if (!theme || invalidTheme) {
  //     const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
  //     theme = matches ? 'dark' : 'light';
  //   }

  //   return theme
  // }, []);

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
