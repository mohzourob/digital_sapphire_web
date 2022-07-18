import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Container, Grid, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

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

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const Collection = ({ image, creatorName, collectionName }: any) => (
  <Grid container wrap="nowrap" spacing={1} alignItems="center">
    <Grid item position="relative">
      <ProfileImage src={image} width={40} height={40} />
    </Grid>
    <Grid item>
      <Stack>
        <CreatorName variant="subtitle1">{creatorName}</CreatorName>
        <CollectionName variant="body2">{collectionName}</CollectionName>
      </Stack>
    </Grid>
  </Grid>
);

const columns: GridColDef[] = [
  {
    field: "collection",
    headerName: "Collection",
    sortable: false,
    width: 170,
    renderCell: (paramas) => {
      return (
        <Collection
          image={paramas.row.image}
          creatorName={paramas.row.creatorName}
          collectionName={paramas.row.collectionName}
        />
      );
    },
  },
  {
    field: "floorPrice",
    headerName: "Floor Price",
    type: "number",
    width: 100,
    renderCell: (paramas) => {
      return (
        <Price>
          {paramas.row.floorPrice}{" "}
          <Image src="/ETH.svg" width={16} height={16} alt="ETH icon" />
        </Price>
      );
    },
  },
  {
    field: "sevenDayVolume",
    headerName: "7d Volume",
    type: "number",
    width: 100,
    renderCell: (paramas) => {
      return (
        <Price>
          {paramas.row.sevenDayVolume}{" "}
          <Image src="/ETH.svg" width={16} height={16} alt="ETH icon" />
        </Price>
      );
    },
  },
  {
    field: "day",
    headerName: "24h %",
    type: "number",
    width: 130,
    renderCell: (paramas) => {
      return (
        <Typography color={paramas.row.day > 0 ? "#92D28F" : "#EC5757"}>
          {paramas.row.day > 0 ? "+" : ""}
          {paramas.row.day} %
        </Typography>
      );
    },
  },
  {
    field: "sevenDay",
    headerName: "7d %",
    type: "number",
    width: 130,
    renderCell: (paramas) => {
      return (
        <Typography color={paramas.row.sevenDay > 0 ? "#92D28F" : "#EC5757"}>
          {paramas.row.sevenDay > 0 ? "+" : ""}
          {paramas.row.sevenDay} %
        </Typography>
      );
    },
  },
  {
    field: "owners",
    headerName: "Owners",
    type: "number",
    width: 130,
  },
  {
    field: "items",
    headerName: "Items",
    type: "number",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 2,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.03,
    sevenDayVolume: 0.25,
    day: +23.2,
    sevenDay: -12.1,
    owners: 100,
    items: 1000,
  },
  {
    id: 3,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 4,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 5,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 6,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 7,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 8,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
  {
    id: 9,
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    floorPrice: 0.02,
    sevenDayVolume: 0.24,
    day: +23.9,
    sevenDay: -12.3,
    owners: 1000,
    items: 100,
  },
];

export default function WatchList() {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h6"
        color="text.primary"
        fontWeight={600}
        marginY="2rem"
      >
        My Watchlist
      </Typography>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ height: "100vh", width: "82%" }}>
          <StyledDataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
      </div>
    </Container>
  );
}

const StyledDataGrid = styled(DataGrid)(({ theme }: any) => ({
  border: "none",
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottomColor: "#ccc",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    borderTop: "1px solid #ccc",
  },
  "& .MuiDataGrid-columnSeparator": {
    color: "#ccc",
  },
  "& .MuiDataGrid-cell": {
    borderColor: "#ccc",
  },
}));
