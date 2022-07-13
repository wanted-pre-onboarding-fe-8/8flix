import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../store/recoil';

function useTheme() {
  const [isLightMode, setIsLightMode] = useRecoilState(themeState);

  const detectDarkMode = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    if (detectDarkMode()) {
      setIsLightMode(false);
    } else setIsLightMode(true);
  }, []);

  return isLightMode;
}

export default useTheme;
