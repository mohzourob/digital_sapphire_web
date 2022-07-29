import styled from "@emotion/styled";
import { Container, Grid, Typography } from "@mui/material";
import NFTItemCard from "../HomePage/TopItems/NFTItemCard";
import PriceFilter from "../Global/Common/PriceFilter";
import SortByPrice from "../Global/Common/SortByPrice";

import NFTImage from "../../public/NFT.png";
import ExploreFilter from "./ExploreFilter";

const ExploreItem = () => {
  return (
    <Container maxWidth="lg">
      <Main>
        <Typography
          variant="h6"
          color="text.primary"
          fontWeight={600}
          marginBottom="1.5rem"
        >
          Explore
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <ExploreFilter />
          </Grid>

          <Grid item container xs={12} md={3.5}>
            <Grid item marginRight="1rem">
              <PriceFilter />
            </Grid>
            <Grid item>
              <SortByPrice />
            </Grid>
          </Grid>
        </Grid>

        <Grid container wrap="wrap" justifyContent="center" spacing={3}>
          {[...Array(10)].map((x, i) => (
            <Grid item key={i}>
              <NFTItemCard
                name="Hamlet Contemplates Yorick's"
                creator="Sami"
                price={23}
                image={NFTImage}
                likedNumber={100}
              />
            </Grid>
          ))}
        </Grid>
      </Main>
    </Container>
  );
};

const Main = styled.section`
  margin: 2rem 0;
`;

export default ExploreItem;
