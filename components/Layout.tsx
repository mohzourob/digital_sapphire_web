import { RootStateOrAny, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '../styles/themes';

const Layout = ({ children }: any) => {
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
