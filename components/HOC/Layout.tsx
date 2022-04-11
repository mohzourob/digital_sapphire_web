import { RootStateOrAny, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "../../styles/themes";
import ClientOnly from "./ClientOnly";

const Layout = ({ children }: any) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <ClientOnly>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ClientOnly>
  );
};

export default Layout;
