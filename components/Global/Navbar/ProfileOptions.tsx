import { styled } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Avatar, ListItemIcon } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

import { CollectedSVG, LogoutSVG, WatchListSVG } from "../../SVG";
import Link from "next/link";

const ProfileOptions = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const logout = () => {};
  const open = Boolean(anchorEl);
  const { t } = useTranslation("homePage");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = async () => {
    await logout();
  };

  return (
    <div>
      <Avatar
        src="/broken-image.jpg"
        onClick={handleClick}
        sx={{ cursor: "pointer" }}
      />
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Link href="/profile" passHref>
          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            Profile
          </MenuItem>
        </Link>

        <Divider sx={{ my: 0.5 }} />
        <Link href="/profile" passHref>
          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            Favorites
          </MenuItem>
        </Link>

        <Divider sx={{ my: 0.5 }} />
        <Link href="/watchlist" passHref>
          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon sx={{ paddingLeft: "3px" }}>
              <WatchListSVG />
            </ListItemIcon>
            WatchList
          </MenuItem>
        </Link>

        <Divider sx={{ my: 0.5 }} />
        <Link href="/profile" passHref>
          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon sx={{ paddingLeft: "3px" }}>
              <CollectedSVG />
            </ListItemIcon>
            My Collections
          </MenuItem>
        </Link>

        <Divider sx={{ my: 0.5 }} />
        <Link href="/profile-settings" passHref>
          <MenuItem onClick={handleClose} disableRipple>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>

        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={logOut} disableRipple>
          <ListItemIcon sx={{ paddingLeft: "5px" }}>
            <LogoutSVG />
          </ListItemIcon>
          Log out
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    sx={{ marginTop: "0.5rem" }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    color:
      theme.palette.mode === "light"
        ? theme.palette.secondary.main
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    border: "1px solid #ccc",
  },
  "& .MuiMenuItem-root": {
    ":hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.grey[300]
          : theme.palette.grey[700],
    },
  },
}));

export default ProfileOptions;
