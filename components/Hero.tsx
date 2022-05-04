import styled from "@emotion/styled";
import { Grid, Container, Typography, Stack, Link } from "@mui/material";
import Image from "next/image";

import monlizaImage from "../public/monlizaImage.png";
import MainButton from "./MainButton";
import SecondaryButton from "./SecondaryButton";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const Hero = () => {
  return (
    <Container maxWidth="lg">
      <StyledGrid container>
        <Grid item container md={6}>
          <Stack>
            <Grid item>
              <StyledHead variant="h1" color="text.primary">
                Discover and <br /> Collect your favorite <br /> digital Nfts
              </StyledHead>
              <StyledBody variant="body2" color="text.secondary">
                MirNFT is easiest and safetiest place for collect, buy, and sell
                NFT’s art around the world.
              </StyledBody>
            </Grid>
            <Grid item>
              <MainButton style={{ marginRight: "1rem" }}>Explore</MainButton>
              <SecondaryButton>Create</SecondaryButton>
            </Grid>
            <Grid item my={6}>
              <StyledLink href="/about" underline="hover">
                <PlayCircleFilledIcon style={{ marginRight: "0.5rem" }} />
                Learn more about us
              </StyledLink>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          container
          item
          xs={6}
          md={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ImageWraper>
              <Image
                alt="main pic"
                src={monlizaImage}
                width={430}
                height={500}
                loading="lazy"
              />
            </ImageWraper>
          </Grid>
        </Grid>
      </StyledGrid>
    </Container>
  );
};

const ImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 15px;
  }
`;

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 1rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
  }
`;

const StyledHead = styled(Typography)`
  font-size: 36px;
  line-height: 50px;
  font-weight: 700;
  margin-top: 3rem;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

const StyledBody = styled(Typography)`
  max-width: 50%;
  font-size: 1.1rem;
  margin: 1rem 0rem;

  @media (max-width: 900px) {
    margin: 1rem auto;
  }
`;

const StyledLink = styled(Link)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  width: fit-content;

  @media (max-width: 900px) {
    margin: auto;
    justify-content: center;
  }
`;

export default Hero;
