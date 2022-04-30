import NFTItemCard from "./NFTItemCard";
import NFTImage from "../public/NFT.png";
import Carousel from "./Carousel";
import { Container, Grid, Stack, Typography, Link } from "@mui/material";
import styled from "@emotion/styled";

const responsive = {
  0: { items: 1 },
  550: { items: 2 },
  800: { items: 3 },
  1080: { items: 4 },
};

const items = [
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Sami"
    price={23}
    image={NFTImage}
    alt="NFT"
    likedNumber={100}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={23.3}
    image={NFTImage}
    alt="NFT"
    likedNumber={200}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samisswwwwwwwwwwwwwssdasdasdsads"
    price={100}
    image={NFTImage}
    alt="NFT"
    likedNumber={300}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={1000.8888888}
    image={NFTImage}
    alt="NFT"
    likedNumber={400}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={22}
    image={NFTImage}
    alt="NFT"
    likedNumber={500}
  />,
];

const TopItemsCarousel = () => {
  return (
    <Container maxWidth="lg">
      <Stack marginTop="3rem">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Title variant="h6" color="text.primary">
              Top items
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

export default TopItemsCarousel;
