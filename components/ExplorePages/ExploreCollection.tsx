import styled from "@emotion/styled";
import { Container, Grid, Typography } from "@mui/material";

import PriceFilter from "../Global/PriceFilter";
import SortByPrice from "../Global/SortByPrice";
import CollectionCard from "../HomePage/TopCollection/CollectionCard";

import NFTImage from "../../public/NFT.png";
import ExploreFilter from "./ExploreFilter";

const ExploreCollection = () => {
  return (
    <Container maxWidth="xl">
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
              <CollectionCard
                name="Hamlet Contemplates Yorick's"
                creator="Sami"
                image={NFTImage}
                itemsNumber={23}
                verified
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

export default ExploreCollection;
