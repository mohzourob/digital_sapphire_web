import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import {
  Badge,
  ClickAwayListener,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NotificationsPopup = () => {
  const [open, setOpen] = useState<true | false>(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Notifications>
        <IconButton onClick={handleClick}>
          <StyledBadge variant="dot">
            <NotificationsIcon
              sx={{
                color: "secondary.main",
              }}
            />
          </StyledBadge>
        </IconButton>

        {open && (
          <NotificationsMain>
            <NotificationsList>
              <Header justifyContent="space-between">
                <Typography variant="body1" color="text.primary">
                  Notification
                </Typography>
                <MarkAsRead>
                  Mark as read{" "}
                  <CheckCircleOutlineIcon
                    sx={{ marginLeft: "4px" }}
                    fontSize="small"
                  />
                </MarkAsRead>
              </Header>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft sadasd asd adsd
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
              <Divider sx={{ my: 0.2 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <Stack>
                  <Typography variant="body1" color="text.primary">
                    Freddie Carpenter make an offer for your nft
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yesterday at 11:42 PM
                  </Typography>
                </Stack>
              </MenuItem>
            </NotificationsList>
          </NotificationsMain>
        )}
      </Notifications>
    </ClickAwayListener>
  );
};

const Notifications = styled.div`
  position: relative;
`;

const Header = styled.div(({ theme }: any) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  padding: "0 1rem",
  marginBottom: "1rem",
}));

const MarkAsRead = styled.div(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  color: theme.palette.text.primary,

  ":hover": {
    textDecoration: "underline",
    color: theme.palette.secondary.button,
  },
}));

const NotificationsMain = styled.div(({ theme }: any) => ({
  position: "absolute",
  inset: "10px -30px auto auto",
  margin: "0px",
  transform: "translate3d(0px, 41px, 0px)",
  backgroundColor: theme.palette.primary.nav,
  border: `1px solid ${theme.palette.border}`,
  borderRadius: "8px",
  padding: "1rem 0",
}));

const StyledBadge = styled(Badge)(({ theme }: any) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 5,
    padding: "4px",
    backgroundColor: theme.palette.badge,
  },
}));

const NotificationsList = styled.div(({ theme }: any) => ({
  width: "350px",
  maxHeight: "400px",
  overflowY: "scroll",
  whiteSpace: "pre-wrap",

  p: {
    whiteSpace: "pre-wrap",
  },
}));

export default NotificationsPopup;
