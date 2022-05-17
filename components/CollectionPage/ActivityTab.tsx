import { Grid, Typography } from "@mui/material";

import ActivityItem from "./ActivityItem";

const ActivityTab = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        columnSpacing={1}
        overflow="auto"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Grid item md={0.5}>
          <Typography variant="subtitle1" color="text.primary">
            {" "}
          </Typography>
        </Grid>
        <Grid item md={0.5}>
          <Typography variant="subtitle1" color="text.primary">
            {" "}
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography variant="subtitle1" color="text.primary">
            {" "}
          </Typography>
        </Grid>
        <Grid item md={0.9}>
          <Typography variant="subtitle1" color="text.primary">
            Price
          </Typography>
        </Grid>
        <Grid item md={1.1}>
          <Typography
            variant="subtitle1"
            color="text.primary"
            overflow="hidden"
          >
            Quantity
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle1" color="text.primary">
            From
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle1" color="text.primary">
            To
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography variant="subtitle1" color="text.primary">
            Time
          </Typography>
        </Grid>
      </Grid>

      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
      <ActivityItem />
    </>
  );
};

export default ActivityTab;
