import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Badge,
} from "@mui/material";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../../features/themeSlice";
import Logo from "./Logo";
import MainButton from "../Common/MainButton";
import SearchInput from "./SearchInput";
import ExploreMenu from "./ExploreMenuButton";
import CreateMenu from "./CreateMenuButton";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MobileDrawer from "../Common/MobileDrawer";
import NotificationsPopup from "./NotificationsPopup";
import ProfileOptions from "./ProfileOptions";

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.user.isAuth
  );
  const { t } = useTranslation("homePage");

  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <CustomAppBar position="sticky" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ height: "100%" }}
          dir={router.locale === "en" ? "ltr" : "rtl"}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={2} md={1} lg={0.5}>
              <Logo />
            </Grid>
            <Grid item xs={7} md={9.5} lg={5.5} justifyContent="center">
              <SearchInput text={t("search")} />
            </Grid>
            <Grid
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
              item
              lg={1}
              justifyContent="center"
            >
              <ExploreMenu />
            </Grid>
            <Grid
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
              item
              lg={1}
              justifyContent="center"
            >
              <CreateMenu />
            </Grid>
            <Grid container item xs={2} md={0.5} justifyContent="center">
              <NotificationsPopup />
            </Grid>
            <Grid
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
              item
              lg={0.5}
              justifyContent="center"
            >
              <IconButton
                sx={{
                  mx: "1rem",
                  color: "secondary.main",
                }}
                onClick={() => dispatch(toggleTheme())}
              >
                {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Grid>

            <Grid
              item
              sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
              lg={0.5}
              justifyContent="center"
            >
              <Link
                href="#"
                locale={router.locale === "en" ? "ar" : "en"}
                passHref
              >
                <IconButton>
                  <Typography variant="subtitle2" color="secondary.main">
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
                  lg={2}
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
                sx={{ display: { xs: "none", md: "none", lg: "flex" } }}
                md={isAuthenticated ? 0.5 : 3}
                lg={isAuthenticated ? 0.5 : 2}
                justifyContent="flex-end"
              >
                <ProfileOptions />
              </Grid>
            )}

            <Grid
              sx={{ display: { xs: "flex", md: "flex", lg: "none" } }}
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

const StyledBadge = styled(Badge)(({ theme }: any) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 5,
    padding: "4px",
    backgroundColor: theme.palette.badge,
  },
}));

export default Navbar;
