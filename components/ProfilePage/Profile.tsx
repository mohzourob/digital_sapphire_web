import styled from "@emotion/styled";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import cover from "../../public/cover.png";
import profileImage from "../../public/NFT.png";
import ETH from "../../public/ETH.svg";

import {
  CollectedSVG,
  DiscordSVG,
  FacebookSVG,
  ShareSVG,
  TwitterSVG,
  InstagramSVG,
  ActivitySVG,
} from "../SVG";
import CreatedButton from "./CreatedButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchInput from "../Global/Navbar/SearchInput";
import ItemsFilter from "../Global/ItemsFilter";
import NFTItemCard from "../HomePage/TopItems/NFTItemCard";
import NFTImage from "../../public/NFT.png";

const Profile = () => {
  return (
    <Main>
      <ImageWraper>
        <Image
          src={cover}
          alt="cover"
          height={150}
          layout="fill"
          objectFit="cover"
        />
      </ImageWraper>

      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={3}>
            <Grid container justifyContent="center" position="relative">
              <Stack marginTop="2rem" width="100%">
                <ProfileImage>
                  <Image
                    src={profileImage}
                    alt="cover"
                    width={110}
                    height={110}
                    layout="fill"
                    objectFit="cover"
                  />
                </ProfileImage>

                <Typography
                  variant="h6"
                  color="text.primary"
                  marginTop={5}
                  textAlign="center"
                >
                  Sami Sabbah
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="center"
                >
                  Joined June 2021
                </Typography>

                <ProfileIcons
                  container
                  justifyContent="space-between"
                  wrap="nowrap"
                >
                  <Grid item>
                    <ShareIcon href="#" target="_blank">
                      <ShareSVG />
                    </ShareIcon>
                  </Grid>
                  <Grid item>
                    <Icon href="#" target="_blank">
                      <FacebookSVG />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Icon href="#" target="_blank">
                      <InstagramSVG />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Icon href="#" target="_blank">
                      <TwitterSVG />
                    </Icon>
                  </Grid>
                  <Grid item>
                    <Icon href="#" target="_blank">
                      <DiscordSVG />
                    </Icon>
                  </Grid>
                </ProfileIcons>

                <WalletAddress
                  container
                  wrap="nowrap"
                  marginTop={2}
                  alignItems="center"
                >
                  <Grid item xs={2} textAlign="center">
                    <Image src={ETH} />
                  </Grid>
                  <Grid item xs={10}>
                    <Address>
                      0x029290c564Ef921c56a784AA16C97E930dAF7372
                    </Address>
                  </Grid>
                </WalletAddress>

                <Grid
                  container
                  width="fit-content"
                  sx={{ flexDirection: { xs: "row", md: "column" } }}
                  justifyContent="space-between"
                  alignItems="flex-start"
                  margin="auto"
                  marginTop={2}
                >
                  <Grid item marginTop={3}>
                    <Button
                      sx={{ textTransform: "none" }}
                      variant="text"
                      startIcon={<CollectedSVG />}
                    >
                      Collected 7k
                    </Button>
                  </Grid>
                  <Grid item marginTop={3}>
                    <CreatedButton />
                  </Grid>
                  <Grid item marginTop={3}>
                    <Button
                      sx={{ textTransform: "none" }}
                      variant="text"
                      startIcon={<FavoriteIcon />}
                    >
                      Favorited 26
                    </Button>
                  </Grid>
                  <Grid item marginTop={3}>
                    <Button
                      sx={{ textTransform: "none" }}
                      variant="text"
                      startIcon={<ActivitySVG />}
                    >
                      Activity
                    </Button>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Stack>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                marginTop={5}
                wrap="nowrap"
              >
                <Grid item>
                  <SearchInput
                    text="Search items, collection and accounts"
                    small
                  />
                </Grid>
                <Grid item>
                  <ItemsFilter />
                </Grid>
              </Grid>

              <Grid container marginY={5} justifyContent="space-between">
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={23.3}
                  image={NFTImage}
                  likedNumber={200}
                  owner
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samisswwwwwwwwwwwwwssdasdasdsads"
                  price={100}
                  image={NFTImage}
                  likedNumber={300}
                  owner
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={1000.8888888}
                  image={NFTImage}
                  likedNumber={400}
                  owner
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={22}
                  image={NFTImage}
                  likedNumber={500}
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={22}
                  image={NFTImage}
                  likedNumber={500}
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={22}
                  image={NFTImage}
                  likedNumber={500}
                />
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

const Main = styled.section`
  min-height: 100vh;
  position: relative;
`;

const ImageWraper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

const ProfileImage = styled.div(({ theme }: any) => {
  return {
    position: "absolute",
    width: "110px",
    height: "110px",
    top: "-55px",
    left: "calc(50% - 55px)",
    borderRadius: "50%",
    border: `3px solid ${theme.palette.primary.nav}`,

    img: {
      borderRadius: "50%",
    },
  };
});

const ProfileIcons = styled(Grid)(({ theme }: any) => {
  return {
    width: "200px",
    margin: "auto",
    padding: "10px",
    marginTop: "2rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
  };
});

const Icon = styled.a(({ theme }: any) => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "1rem",
    width: "20px",
    height: "20px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.nav,
    borderRadius: "50%",

    "::before": {
      position: "absolute",
      content: "no-close-quote",
      left: "-50%",
      width: "1px",
      height: "200%",
      backgroundColor: theme.palette.primary.main,
    },
  };
});

const ShareIcon = styled.a(({ theme }: any) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
  };
});

const WalletAddress = styled(Grid)(({ theme }: any) => {
  return {
    width: "200px",
    margin: " 1rem auto",
    border: `1px solid ${theme.palette.primary.main}`,
    padding: "8px",
    borderRadius: "10px",
  };
});

const Address = styled(Typography)(({ theme }: any) => {
  return {
    width: "100%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

export default Profile;
