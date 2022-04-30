import { useState } from "react";
import styled from "@emotion/styled";
import { Grid, IconButton, AppBar, Toolbar, Container } from "@mui/material";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../features/themeSlice";
import Logo from "./Logo";
import MainButton from "./MainButton";
import SearchInput from "./SearchInput";
import ExploreMenu from "./ExploreMenuButton";
import CreateMenu from "./CreateMenuButton";
import NotificationsDropdown from "./NotificationsDropdown";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <CustomAppBar position="sticky" enableColorOnDark>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: "100%" }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item mr={2}>
              <Logo />
            </Grid>
            <Grid
              sx={{ display: { xs: "none", md: "block" } }}
              item
              md={4}
              lg={5}
            >
              <SearchInput />
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }} item md={1}>
              <ExploreMenu />
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" } }} item md={1}>
              <CreateMenu />
            </Grid>
            <NotificationsDropdown />
            <IconButton
              sx={{
                mx: "1rem",
                color: "text.primary",
              }}
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Grid item sx={{ display: { xs: "none", md: "block" } }}>
              <MainButton startIcon={<AccountBalanceWalletIcon />}>
                Connect Wallet
              </MainButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

const CustomAppBar = styled(AppBar)(({ theme }: any) => {
  return {
    boxShadow: "none",
    backgroundColor: theme.palette.primary.nav,
    borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    backgroundImage: "none",
    transition: " background 0.6s ease",
  };
});

export default Navbar;
