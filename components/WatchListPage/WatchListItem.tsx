import { useState } from "react";
import styled from "@emotion/styled";
import {
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import profilePic from "../../public/profile-pic.png";
import ETH from "../../public/ETH.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const WatchListItem = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Item>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ overflow: { xs: "scroll", md: "auto" } }}
          wrap="nowrap"
          spacing={2}
        >
          <Grid item md={3}>
            <Grid container wrap="nowrap" spacing={1} alignItems="center">
              <Grid item position="relative">
                <ProfileImage src={profilePic} width={40} height={40} />
              </Grid>
              <Grid item>
                <Stack>
                  <CreatorName variant="subtitle1">
                    Freddie Carpenter
                  </CreatorName>
                  <CollectionName variant="body2">
                    CyberMonkey #292
                  </CollectionName>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container justifyContent="left" wrap="nowrap" md={2}>
            <Grid item>
              <Image
                alt="Eth icon"
                src={ETH}
                width={18}
                height={18}
                loading="lazy"
              />
            </Grid>
            <Price item>0.024</Price>
          </Grid>

          <Grid item container justifyContent="left" wrap="nowrap" md={2}>
            <Grid item>
              <Image
                alt="Eth icon"
                src={ETH}
                width={18}
                height={18}
                loading="lazy"
              />
            </Grid>
            <Price item>0.024</Price>
          </Grid>

          <Grid item md={1}>
            <Typography variant="subtitle1" color="text.success">
              +23.9%
            </Typography>
          </Grid>
          <Grid item md={1}>
            <Typography variant="subtitle1" color="text.fail">
              -23.9%
            </Typography>
          </Grid>
          <Grid item md={1}>
            <Typography variant="subtitle1" color="text.primary">
              14.8k
            </Typography>
          </Grid>
          <Grid item md={1}>
            <Typography variant="subtitle1" color="text.primary">
              3
            </Typography>
          </Grid>
          <Grid item md={1}>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose} disableRipple>
                Delete
              </MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
      </Container>
    </Item>
  );
};

const Item = styled.div(({ theme }: any) => {
  return {
    marginTop: "1rem",
    padding: "2rem 0 1rem",
    borderTop: `1px solid ${theme.palette.border}`,
  };
});

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

const CreatorName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

const CollectionName = styled(Typography)(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
  };
});

const Price = styled(Grid)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

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
    {...props}
  />
))(({ theme }: any) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    color: theme.palette.text.fail,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  "& .MuiMenuItem-root": {
    ":hover": {
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.grey[300]
          : theme.palette.grey[800],
    },
  },
}));

export default WatchListItem;
