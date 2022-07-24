import {
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/themeSlice";
import Link from "next/link";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";
import MainButton from "./MainButton";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import { CollectedSVG, WatchListSVG } from "../../SVG";

import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { logout } from "../../../features/userSlice";
const MobileDrawer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);
  const { t } = useTranslation("homePage");
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.user.isAuth
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [nestedProfileOpen, setNestedProfileOpen] = useState(false);

  const handleClick = () => {
    setNestedProfileOpen(!nestedProfileOpen);
  };

  const list = () => (
    <Box
      role="presentation"
      sx={{ width: 250 }}
      dir={router.locale === "en" ? "ltr" : "rtl"}
    >
      <List>
        {!isAuthenticated && (
          <ListItem disablePadding>
            <Link href={"/login"} passHref>
              <ListItemButton>
                <MainButton
                  startIcon={
                    router.locale === "en" ? <AccountBalanceWalletIcon /> : null
                  }
                  endIcon={
                    router.locale === "ar" ? <AccountBalanceWalletIcon /> : null
                  }
                >
                  {t("connectWallet")}
                </MainButton>
              </ListItemButton>
            </Link>
          </ListItem>
        )}

        {isAuthenticated && (
          <>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Profile" />
              {nestedProfileOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Divider />

            <Collapse in={nestedProfileOpen} timeout="auto" unmountOnExit>
              <Link href="/profile" passHref>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Divider />

              <Link href="/profile" passHref>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <FavoriteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Favorites" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Divider />

              <Link href="/watchlist" passHref>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon sx={{ paddingLeft: "3px" }}>
                      <WatchListSVG />
                    </ListItemIcon>
                    <ListItemText primary="Watch List" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Divider />

              <Link href="/profile" passHref>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon sx={{ paddingLeft: "3px" }}>
                      <CollectedSVG />
                    </ListItemIcon>
                    <ListItemText primary="My Collections" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Divider />

              <Link href="/profile-settings" passHref>
                <ListItem component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemButton>
                </ListItem>
              </Link>
              <Divider />
            </Collapse>
          </>
        )}

        <Link href="/explore-item" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Explore Item"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider />
        <Link href="/explore-collection" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Explore Collection"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider />

        <Link href="/create-item" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Create Item"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider />

        <Link href="/create-collection" passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Create Collection"} />
            </ListItemButton>
          </ListItem>
        </Link>

        <Divider />

        <ListItem disablePadding onClick={() => dispatch(toggleTheme())}>
          <ListItemButton>
            <ListItemIcon>
              <IconButton>
                {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={"Toggle Theme"} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton onClick={() => dispatch(logout())}>
            <ListItemIcon>
              <IconButton>
                <LogoutIcon />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <Link href="" locale={router.locale === "en" ? "ar" : "en"} passHref>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={t("changeLocale")} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer} color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={router.locale === "en" ? "right" : "left"}
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default MobileDrawer;
