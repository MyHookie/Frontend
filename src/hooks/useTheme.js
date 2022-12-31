import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import isDarkState from '../atoms/darkMode';

function useTheme() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  const getInitialTheme = useCallback(() => {
    let theme = localStorage.getItem('theme');
    const invalidTheme = theme !== 'light' && theme !== 'dark';

    if (!theme || invalidTheme) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
      theme = !!matches;
    }
    console.log('theme', theme);

    setIsDark(getInitialTheme);
    return theme;
  }, []);

  console.log(isDark);
}

export default useTheme;
