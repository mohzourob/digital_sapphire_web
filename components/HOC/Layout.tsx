import {
  createTheme,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

const Layout = ({ children }: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.theme.theme);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{ body: { background: mode === "light" ? "#FFF" : "#20283b" } }}
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
          },
          divider: "#20283b",
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#83b1d4",
          },
          divider: "#83b1d4",
          background: {
            default: "#20283b",
            paper: "#20283b",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
