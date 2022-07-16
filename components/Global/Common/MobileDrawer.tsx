import * as React from "react";
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
} from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuIcon from "@mui/icons-material/Menu";
import MainButton from "./MainButton";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/themeSlice";
import Link from "next/link";

const MobileDrawer = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);
  const { t } = useTranslation("homePage");
  const router = useRouter();

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const list = () => (
    <Box
      role="presentation"
      sx={{ width: 250 }}
      dir={router.locale === "en" ? "ltr" : "rtl"}
    >
      <List>
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

        <ListItem disablePadding onClick={toggleDrawer}>
          <ListItemButton>
            <ListItemText primary={"Explore Item"} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding onClick={toggleDrawer}>
          <ListItemButton>
            <ListItemText primary={"Explore Collection"} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding onClick={toggleDrawer}>
          <ListItemButton>
            <ListItemText primary={"Create Item"} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding onClick={toggleDrawer}>
          <ListItemButton>
            <ListItemText primary={"Create Collection"} />
          </ListItemButton>
        </ListItem>

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
          <Link href="" locale={router.locale === "en" ? "ar" : "en"}>
            <ListItemButton>
              <ListItemText primary={t("changeLocale")} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <IconButton onClick={toggleDrawer} color="primary">
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={router.locale === "en" ? "right" : "left"}
        open={isOpen}
        onClose={toggleDrawer}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default MobileDrawer;
