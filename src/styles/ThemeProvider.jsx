import React, { useMemo } from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { darkMode, lightMode } from './theme';
import useTheme from '../hooks/useTheme';

const ThemeProvider = ({ children }) => {
  const isLightMode = useTheme();
  const theme = useMemo(
    () => (isLightMode ? lightMode : darkMode),
    [isLightMode]
  );

  return (
    <StyledProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledProvider>
  );
};

export default ThemeProvider;
