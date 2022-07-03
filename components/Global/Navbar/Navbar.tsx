import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useMoralis } from "react-moralis";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from "@mui/material";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../../features/themeSlice";
import Logo from "./Logo";
import MainButton from "../MainButton";
import SearchInput from "./SearchInput";
import ExploreMenu from "./ExploreMenuButton";
import CreateMenu from "./CreateMenuButton";
import NotificationsDropdown from "./NotificationsDropdown";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MobileDrawer from "../MobileDrawer";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, logout } = useMoralis();
  const { t } = useTranslation("homePage");

  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <CustomAppBar position="sticky" enableColorOnDark>
      <Container maxWidth="md">
        <Toolbar
          disableGutters
          sx={{ height: "100%" }}
          dir={router.locale === "en" ? "ltr" : "rtl"}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={2} md={0.5} lg={0.5}>
              <Logo />
            </Grid>
            <Grid item xs={8} md={4.5} justifyContent="center">
              <SearchInput text={t("search")} />
            </Grid>
            <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              item
              md={1}
              justifyContent="center"
            >
              <ExploreMenu />
            </Grid>
            <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              item
              md={1}
              justifyContent="center"
            >
              <CreateMenu />
            </Grid>
            {/* <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              item
              md={0.5}
              justifyContent="center"
            >
              <NotificationsDropdown />
            </Grid> */}
            <Grid
              sx={{ display: { xs: "none", md: "flex" } }}
              item
              md={0.5}
              justifyContent="center"
            >
              <IconButton
                sx={{
                  mx: "1rem",
                  color: "text.primary",
                }}
                onClick={() => dispatch(toggleTheme())}
              >
                {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Grid>

            <Grid
              item
              sx={{ display: { xs: "none", md: "flex" } }}
              md={0.5}
              justifyContent="center"
            >
              <Link href="" locale={router.locale === "en" ? "ar" : "en"}>
                <IconButton>
                  <Typography variant="subtitle2" color="text.main">
                    {t("changeLocale")}
                  </Typography>
                </IconButton>
              </Link>
            </Grid>

            {!isAuthenticated && (
              <Link href={"/login"} passHref>
                <Grid
                  item
                  sx={{ display: { xs: "none", md: "flex" } }}
                  md={3}
                  lg={2.5}
                  justifyContent="flex-end"
                >
                  <MainButton
                    startIcon={
                      router.locale === "en" ? (
                        <AccountBalanceWalletIcon />
                      ) : null
                    }
                    endIcon={
                      router.locale === "ar" ? (
                        <AccountBalanceWalletIcon />
                      ) : null
                    }
                  >
                    {t("connectWallet")}
                  </MainButton>
                </Grid>
              </Link>
            )}

            {isAuthenticated && (
              <Grid
                item
                sx={{ display: { xs: "none", md: "flex" } }}
                md={3}
                lg={2.5}
                justifyContent="flex-end"
              >
                <MainButton
                  onClick={logOut}
                  startIcon={
                    router.locale === "en" ? <AccountBalanceWalletIcon /> : null
                  }
                  endIcon={
                    router.locale === "ar" ? <AccountBalanceWalletIcon /> : null
                  }
                >
                  Logout
                </MainButton>
              </Grid>
            )}

            <Grid
              sx={{ display: { xs: "flex", md: "none" } }}
              item
              xs={1}
              justifyContent="end"
            >
              <MobileDrawer />
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
