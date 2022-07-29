import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";
import Image from "next/image";

import { DiscordSVG, FacebookSVG, TwitterSVG, InstagramSVG } from "../SVG";

import cover from "../../public/cover.png";

import CollectionInfo from "./CollectionInfo";
import SecondaryButton from "../Global/Common/SecondaryButton";
import CollectionTabs from "./CollectionTabs";

const Collection = () => {
  return (
    <Main>
      <ImageWraper>
        <Image src={cover} alt="cover" layout="fill" objectFit="cover" />
      </ImageWraper>

      <Container maxWidth="lg">
        <Grid container columnSpacing={4}>
          <CollectionInfo />

          <Grid item xs={12} md={9}>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              marginY={5}
            >
              <SecondaryButton size="small">+ Add to watchlist</SecondaryButton>

              <ProfileIcons
                container
                justifyContent="space-between"
                wrap="nowrap"
              >
                <Icon href="#" target="_blank">
                  <DiscordSVG />
                </Icon>
                <Icon href="#" target="_blank">
                  <FacebookSVG />
                </Icon>
                <Icon href="#" target="_blank">
                  <InstagramSVG />
                </Icon>
                <Icon href="#" target="_blank">
                  <TwitterSVG />
                </Icon>
              </ProfileIcons>
            </Grid>

            <CollectionTabs />
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

const Main = styled.section`
  min-height: 100vh;
  position: relative;

  a {
    color: #9999d4;
    text-decoration: none;
    font-size: 0.8rem;
  }
`;

const ImageWraper = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`;

const ProfileIcons = styled(Grid)(({ theme }: any) => {
  return {
    width: "150px",
    padding: "10px",
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
    width: "20px",
    height: "20px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.nav,
    borderRadius: "50%",

    ":not(:first-of-type)::before": {
      position: "absolute",
      content: "no-close-quote",
      marginLeft: "1rem",
      left: "-120%",
      width: "1px",
      height: "200%",
      backgroundColor: theme.palette.primary.main,
    },
  };
});

export default Collection;
