import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import styled from "@emotion/styled";
import {
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import profilePic from "../../../public/profile-pic.png";
import ETH from "../../../public/ETH.svg";
import MainButton from "../../Global/MainButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type NFTItemProps = {
  name?: string;
  creator?: string;
  price?: number;
  image?: StaticImageData;
  likedNumber?: number;
  owner?: boolean;
};

const NFTItemCard = ({
  name,
  creator,
  price,
  image,
  likedNumber,
  owner,
}: NFTItemProps) => {
  const router = useRouter();
  const { t } = useTranslation("homePage");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledDiv>
      <StyledImage>
        {!image && <div style={{ backgroundColor: "gray" }}></div>}
        {image && <Image src={image} alt={name} layout="fill" loading="lazy" />}
        <LikeButton>
          <FavoriteBorderIcon
            style={{ fontSize: "1rem", marginRight: "2px" }}
          />
          {likedNumber}
        </LikeButton>
      </StyledImage>
      <NFTName variant="h4">{name}</NFTName>
      <Grid container wrap="nowrap">
        <Grid item xs={3}>
          <ProfileImage
            alt={creator}
            src={profilePic}
            width={40}
            height={40}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography color="text.secondary" variant="body2">
              {t("creator")}
            </Typography>
            <CreatorName variant="body1">{creator}</CreatorName>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography color="text.secondary" variant="body2">
              {t("price")}
            </Typography>
            <Grid container wrap="nowrap">
              <Price item xs={8}>
                {price}
              </Price>
              <Grid item xs={4}>
                <Image
                  alt="Eth icon"
                  src={ETH}
                  width={18}
                  height={18}
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "primary.main", margin: "0.5rem 0" }} />
      <Grid
        container
        justifyContent="space-between"
        wrap="nowrap"
        dir={router.locale === "en" ? "ltr" : "rtl"}
      >
        <Grid item>
          {owner && (
            <>
              <IconButton onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
              <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose} disableRipple>
                  Edit
                </MenuItem>
              </StyledMenu>
            </>
          )}

          {!owner && <MainButton size="small">{t("buy")}</MainButton>}
        </Grid>
        <Grid item>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Grid>
      </Grid>
    </StyledDiv>
  );
};

const StyledDiv = styled(Stack)(({ theme }: any) => {
  return {
    margin: "1rem auto 0",
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: "20px",
    padding: "0.5rem 1rem",
    width: "15rem",
    height: "24rem",
  };
});

const StyledImage = styled.div`
  position: relative;
  width: 13rem;
  height: 13rem;
  margin-bottom: 1rem;
  box-shadow: 0px 0px 0px 1px gray inset;
  border-radius: 1rem;
`;

const LikeButton = styled(IconButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #6a1d4c;
  font-size: 0.8rem;
  border-radius: 8px;
  padding: 3px 8px;
  color: #fff;
  &:hover {
    background-color: #692750;
  }
`;

const NFTName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
    marginBottom: "1rem",
  };
});

const ProfileImage = styled(Image)`
  border-radius: 35%;
  position: relative;
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
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
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
          : theme.palette.grey[700],
    },
  },
}));

export default NFTItemCard;
