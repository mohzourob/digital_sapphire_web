import styled from "@emotion/styled";
import { Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import profilePic from "../public/profile-pic.png";
import ETH from "../public/ETH.svg";
import MainButton from "./MainButton";

type NFTItemProps = {
  name: string;
  creator: string;
  price: number;
  image: StaticImageData;
  likedNumber: number;
  alt: string;
};

const NFTItemCard = ({
  name,
  creator,
  price,
  image,
  likedNumber,
  alt,
}: NFTItemProps) => {
  return (
    <StyledDiv>
      <StyledImage>
        <Image src={image} alt={alt} />
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
          <ProfileImage src={profilePic} width={40} height={40} />
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography color="text.secondary" variant="body2">
              Creator
            </Typography>
            <CreatorName variant="body1">{creator}</CreatorName>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography color="text.secondary" variant="body2">
              price
            </Typography>
            <Grid container wrap="nowrap">
              <Price item xs={8}>
                {price}
              </Price>
              <Grid item xs={4}>
                <Image src={ETH} width={18} height={18} />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "primary.main", margin: "0.5rem 0" }} />
      <Grid container justifyContent="space-between" wrap="nowrap">
        <Grid item>
          <MainButton size="small">Buy Now</MainButton>
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
    margin: "2rem auto",
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
  height: 14rem;
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

export default NFTItemCard;
