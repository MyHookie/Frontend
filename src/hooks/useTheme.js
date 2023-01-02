import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import themeState from '../atoms/theme';

function useTheme() {
  const [themeMode, setThemeMode] = useRecoilState(themeState);

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
