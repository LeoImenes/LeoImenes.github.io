import { Theme, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

interface DarkModeContextType {
  darkMode: boolean | undefined;
  toggleMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export const DarkModeProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false);
  const customTheme = useMemo<Theme>(() => {
    return createTheme({
      palette: {
        primary: {
          main: darkMode ? "#0D1B2A" : "#FFFFFF",
        },
        secondary: {
          main: darkMode ? "#D9D9D9" : "#1B263B",
        },
        text: {
          primary: darkMode ? "#E0E1DD" : "#1B263B",
          secondary: darkMode ? "#7A7A78" : "#4D4D4D",
        },
      },
    });
  }, [darkMode]);

  const toggleMode = useCallback(() => {
    setDarkMode((previousMode) => !previousMode);
  }, [customTheme]);

  return (
    <DarkModeContext.Provider value={{ darkMode: false, toggleMode }}>
      <ThemeProvider theme={customTheme}>
        {children}
        </ThemeProvider>
    </DarkModeContext.Provider>
  );
};
