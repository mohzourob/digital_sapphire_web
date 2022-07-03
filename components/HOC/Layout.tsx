import {
  createTheme,
  GlobalStyles,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../features/themeSlice";
import Footer from "../Global/Footer/Footer";
import ModalComponent from "../Global/ModalComponent";
import Navbar from "../Global/Navbar/Navbar";

const Layout = ({ children, noNav, noFooter }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "light" ||
      localStorage.getItem("theme") === "dark"
    ) {
      dispatch(setTheme(localStorage.getItem("theme")));
    }
  }, []);

  const mode = useSelector((state: RootStateOrAny) => state.theme.theme);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "html, body": {
            background: mode === "light" ? "#fafafa" : "#20283b",
          },
          ".MuiButton-endIcon": {
            marginRight: router.locale === "en" ? "-4px" : "5px !important",
          },
        }}
      />
      {!noNav && <Navbar />}
      <ModalComponent />
      {children}
      {!noFooter && <Footer />}
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
            nav: "#fafafa",
          },
          secondary: {
            main: "#83b1d4",
          },
          divider: "#20283b",
          border: "#ccc",
          text: {
            primary: "#222",
            secondary: "rgba(0, 0, 0, 0.6)",
            button: "#fff",
            success: "#92D28F",
            fail: "#EC5757",
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
          divider: "rgba(255, 255, 255, 0.4)",
          border: "rgba(255, 255,  255, 0.4)",
          background: {
            default: "#20283b",
            paper: "#20283b",
          },
          text: {
            primary: "#fff",
            secondary: "rgba(255, 255, 255, 0.6)",
            button: "#fff",
            success: "#92D28F",
            fail: "#EC5757",
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
