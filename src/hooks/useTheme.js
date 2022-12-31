import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import themeState from '../atoms/darkMode';

function useTheme() {
  const [themeMode, setThemeMode] = useRecoilState(themeState);

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

  const themeChange = useCallback(
    (e) => {
      setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

      if (themeMode === 'light') {
        e.target.textContent = '라이트 모드';
      } else {
        e.target.textContent = '다크 모드';
      }
    },
    [themeMode]
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(themeMode));
  }, [themeMode]);

  return themeChange;
}

export default useTheme;
