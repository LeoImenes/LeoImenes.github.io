import { Theme, ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
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
  const [darkTheme, setDarkTheme] = useState(!false);
  const customTheme = useMemo<Theme>(() => {
    return createTheme({
      palette: {
        primary: {
          main: darkTheme ? "#0D1B2A" : "#FFFFFF",
          light: !darkTheme ? "#0D1B2A" : "#FFFFFF",
        },
        secondary: {
          main: darkTheme ? "#D9D9D9" : "#1B263B",
        },
        text: {
          primary: darkTheme ? "#E0E1DD" : "#1B263B",
          secondary: darkTheme ? "#7A7A78" : "#4D4D4D",
        },
      },
      components: {
        MuiButton: {
          variants: [
            {
              props: { variant: "outlined" },
              style: {
                borderRadius: "20px",
                color: darkTheme ? "#fff" : "#1B263B",
                fontWeight: "bolder",
                borderColor: darkTheme ? "#fff" : "#1B263B",
                borderWidth: 2,
              },
            },
            {
              props: { variant: "contained" },
              style: {
                backgroundColor: darkTheme ? "#E0E1DD" : "#1B263B",
                color: !darkTheme ? "#fff" : "#1B263B",
                borderRadius: "20px",
                fontWeight: "bold",
                borderWidth: 2,
              },
            },
          ],
        },
        MuiTypography: {
          variants: [
            {
              props: { color: "textSecondary" },
              style: {
                color: !darkTheme ? "#375081" : "#5B7CBD",
                fontWeight: "bolder",
              },
            },
            {
              props: { color: "textPrimary" },
              style: {
                color: !darkTheme ? "#5B5B58" : "#969792",
                fontSize: "20px",
              },
            },
            {
              props: { color: "primary" },
              style: {
                color: darkTheme ? "#E0E1DD" : "#1B263B",
              },
            },
            {
              props: { variant: "h5" },
              style: {
                fontSize: "1.6em",
              },
            },
          ],
        },
      },
    });
  }, [darkTheme]);

  const toggleMode = useCallback(() => {
    setDarkTheme((previousMode) => !previousMode);
  }, [customTheme]);

  return (
    <DarkModeContext.Provider value={{ darkMode: darkTheme, toggleMode }}>
      <ThemeProvider theme={customTheme}>
        <Box height={"100vh"} sx={{ backgroundColor: "primary.main" }}>
          {children}
        </Box>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};
