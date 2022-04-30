import {
  createTheme,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { useMemo } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

const Layout = ({ children }: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.theme.theme);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { background: mode === "light" ? "	#fff" : "#20283b" },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default Layout;

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#20283b",
            nav: "#fff",
          },
          secondary: {
            main: "#83b1d4",
          },
          divider: "#20283b",
          text: {
            primary: "#222",
            secondary: "rgba(0, 0, 0, 0.6)",
            button: "#000",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#FFF",
            nav: "#20283b",
          },
          secondary: {
            main: "#83b1d4",
          },
          divider: "rgba(255, 255, 255, 0.1)",
          background: {
            default: "#20283b",
            paper: "#20283b",
          },
          text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.6)",
            button: "#fff",
          },
        }),
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
