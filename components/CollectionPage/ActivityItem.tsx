import styled from "@emotion/styled";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

import profilePic from "../../public/NFT.png";
import ETH from "../../public/ETH.svg";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ActivityItem = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ overflow: { xs: "scroll", md: "auto" } }}
      wrap="nowrap"
      spacing={2}
      marginTop={4}
    >
      <Grid item md={0.5}>
        <Typography variant="subtitle1" color="text.primary">
          <ShoppingCartIcon />
        </Typography>
      </Grid>

      <Grid item md={0.5}>
        <Typography variant="subtitle1" color="text.primary">
          List
        </Typography>
      </Grid>

      <Grid item md={3}>
        <Grid container wrap="nowrap" spacing={1} alignItems="center">
          <Grid item position="relative">
            <ProfileImage src={profilePic} width={40} height={40} />
          </Grid>
          <Grid item>
            <Stack>
              <CreatorName variant="subtitle1">Freddie Carpenter</CreatorName>
              <CollectionName variant="body2">CyberMonkey #292</CollectionName>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justifyContent="left" wrap="nowrap" xs={1.5}>
        <Grid item>
          <Image
            alt="Eth icon"
            src={ETH}
            width={18}
            height={18}
            loading="lazy"
          />
        </Grid>
        <Price item>3.2</Price>
      </Grid>

      <Grid item md={0.5}>
        <Typography variant="subtitle1" color="text.primary">
          1
        </Typography>
      </Grid>

      <Grid item md={2}>
        <Typography variant="subtitle1" color="text.primary">
          Fungles Assets
        </Typography>
      </Grid>

      <Grid item md={2}>
        <Typography variant="subtitle1" color="text.primary">
          Fungles Assets
        </Typography>
      </Grid>

      <Grid item md={2}>
        <Typography variant="subtitle1" color="text.primary">
          22 seconds ago
        </Typography>
      </Grid>
    </Grid>
  );
};

const ProfileImage = styled(Image)`
  border-radius: 0.5rem;
`;

const CreatorName = styled(Typography)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

const CollectionName = styled(Typography)(({ theme }: any) => {
  return {
    fontSize: "0.8rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.secondary,
  };
});

const Price = styled(Grid)(({ theme }: any) => {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "0.9rem",
    color: theme.palette.text.primary,
  };
});

export default ActivityItem;
