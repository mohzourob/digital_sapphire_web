import styled from "@emotion/styled";
import {
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";

import profilePic from "../public/profile-pic.png";
import checkIcon from "../public/Check.svg";
import SecondaryButton from "./SecondaryButton";

type NFTItemProps = {
  name: string;
  creator: string;
  price: number;
  image: StaticImageData;
  likedNumber: number;
  alt: string;
  verified?: Boolean;
};

const CollectionCard = ({
  name,
  creator,
  price,
  image,
  likedNumber,
  alt,
  verified,
}: NFTItemProps) => {
  return (
    <StyledDiv>
      <Stack>
        <Grid
          container
          wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2} position="relative">
            <ProfileImage src={profilePic} width={50} height={50} />
            {verified && (
              <VerifiedIcon>
                <Image src={checkIcon} />
              </VerifiedIcon>
            )}
          </Grid>
          <Grid item xs={4}>
            <Stack>
              <CollectionName variant="subtitle1">{name}</CollectionName>
              <ItemsNumber variant="body2">26 items products</ItemsNumber>
            </Stack>
          </Grid>
          <Grid item xs={5}>
            <SecondaryButton size="small">+ Add To Watchlist</SecondaryButton>
          </Grid>
        </Grid>
        <CreatorName variant="subtitle1">
          Created By <Link href={`/creators/${creator}`}>{creator}</Link>
        </CreatorName>
      </Stack>

      <Grid
        container
        wrap="nowrap"
        justifyContent="space-between"
        height="100%"
        paddingBottom="0.5rem"
      >
        <Grid item xs={6}>
          <ImageWraper>
            <Image alt={name} src={image} layout="fill" objectFit="cover" />
          </ImageWraper>
        </Grid>

        <Grid item container xs={5} spacing={1}>
          <Grid
            item
            container
            spacing={1}
            justifyContent="space-between"
            xs={12}
          >
            <Grid item xs={6}>
              <ImageWraper>
                <Image alt={name} src={image} layout="fill" objectFit="cover" />
              </ImageWraper>
            </Grid>
            <Grid item xs={6}>
              <ImageWraper>
                <Image alt={name} src={image} layout="fill" objectFit="cover" />
              </ImageWraper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ImageWraper>
              <Image alt={name} src={image} layout="fill" objectFit="cover" />
            </ImageWraper>
          </Grid>
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
    width: "22rem",
    height: "24rem",

    a: {
      color: "#6464a3",
      textDecoration: "none",
      fontSize: "0.8rem",
    },

    "@media (max-width: 500px)": {
      width: "20rem",
    },
  };
});

const ProfileImage = styled(Image)`
  border-radius: 35%;
`;

const CollectionName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

const ItemsNumber = styled(Typography)(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
  };
});

const VerifiedIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1rem;
  color: #755cff;
`;

const CreatorName = styled(Typography)(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
    marginBottom: "0.5rem",
  };
});

const ImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 15px;
  }
`;
export default CollectionCard;
