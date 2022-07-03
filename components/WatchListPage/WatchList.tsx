import { Container, Grid, Stack, Typography } from "@mui/material";
import WatchListItem from "./WatchListItem";

const WatchList = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Typography
          variant="h6"
          color="text.primary"
          fontWeight={600}
          marginY="2rem"
        >
          My Watchlist
        </Typography>

        <Grid container justifyContent="space-between">
          <Grid item xs={3}>
            <Typography variant="subtitle1" color="text.primary">
              Collection
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" color="text.primary">
              Floor price
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1" color="text.primary">
              7d Volume
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle1" color="text.primary">
              24h %
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle1" color="text.primary">
              7d %
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle1" color="text.primary">
              Owners
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle1" color="text.primary">
              Items
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="subtitle1" color="text.primary">
              {" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Stack>
        <WatchListItem />
        <WatchListItem />
        <WatchListItem />
        <WatchListItem />
        <WatchListItem />
        <WatchListItem />
      </Stack>
    </>
  );
};

export default WatchList;
