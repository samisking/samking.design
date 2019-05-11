import React, { useState, useContext } from 'react';
import theme from '../design-system/theme';

const ActiveThemeContext = React.createContext();
export const useActiveThemeContext = () => useContext(ActiveThemeContext);

function getTheme(mode, defaultMode) {
  const colors =
    theme.colors.modes[mode] || theme.colors.modes[defaultMode] || theme.colors;

  return {
    ...theme,
    colors,
  };
}

export const ActiveThemeProvider = ({ defaultMode = 'light', ...props }) => {
  const modeNames = Object.keys(theme.colors.modes);
  const [mode, setMode] = useState(defaultMode);
  const activeTheme = getTheme(mode, defaultMode);

  const setTheme = mode => {
    setMode(modeNames.includes(mode) ? mode : defaultMode);
  };

  const value = {
    mode,
    modeNames,
    theme: activeTheme,
    setTheme,
  };

  return <ActiveThemeContext.Provider {...props} value={value} />;
};
