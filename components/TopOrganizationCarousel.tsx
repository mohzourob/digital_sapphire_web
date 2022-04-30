import NFTImage from "../public/NFT.png";
import banner from "../public/banner.png";
import Carousel from "./Carousel";
import { Container, Grid, Stack, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";
import OrganizationCard from "./OrganizationCard";

const responsive = {
  660: { items: 2 },
  900: { items: 3 },
  1200: { items: 4 },
};

const items = [
  <OrganizationCard
    name="Sami"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Sami"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Sami"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Sami sabbah"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Samisdsadasasdasdasdasdasdd"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua. Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua"
  />,
];

const TopOrganizationCarousel = () => {
  return (
    <Container maxWidth="lg">
      <Stack marginTop="3rem">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Title variant="h6" color="text.primary">
              Top organizations
            </Title>
          </Grid>
          <Grid item>
            <Explore href="/explore-more" color="text.primary">
              Explore more
            </Explore>
          </Grid>
        </Grid>
        <Carousel items={items} responsive={responsive} />
      </Stack>
    </Container>
  );
};

const Explore = styled(Link)`
  position: relative;
  margin-right: 3rem;
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 1px solid #ff7746;

  &:hover {
    border-bottom: 2px solid #ff7746;
  }

  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;

const Title = styled(Typography)`
  margin-left: 3rem;

  @media (max-width: 500px) {
    margin-left: 1rem;
  }
`;

export default TopOrganizationCarousel;
