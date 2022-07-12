import { useEffect, useState } from 'react';

function useTheme() {
  const [isLightMode, setIsLightMode] = useState(true);

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
