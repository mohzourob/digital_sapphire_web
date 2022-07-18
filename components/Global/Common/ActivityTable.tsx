import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Grid, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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

const Item = ({ image, creatorName, collectionName }: any) => (
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

const Activity = ({ activityIcon, activityState }: any) => (
  <Grid container alignItems="center">
    <Grid item marginRight={2}>
      <Typography variant="subtitle1" color="text.primary">
        {activityIcon}
      </Typography>
    </Grid>

    <Grid item>
      <Typography variant="subtitle1" color="text.primary">
        {activityState}
      </Typography>
    </Grid>
  </Grid>
);

const columns: GridColDef[] = [
  {
    field: "activity",
    headerName: "Activity",
    width: 100,
    renderCell: (paramas) => {
      return (
        <Activity
          activityIcon={paramas.row.activityIcon}
          activityState={paramas.row.activityState}
        />
      );
    },
  },
  {
    field: "item",
    headerName: "Item",
    sortable: false,
    width: 170,
    renderCell: (paramas) => {
      return (
        <Item
          image={paramas.row.image}
          creatorName={paramas.row.creatorName}
          collectionName={paramas.row.collectionName}
        />
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 100,
    renderCell: (paramas) => {
      return (
        <Price>
          {paramas.row.price}{" "}
          <Image src="/ETH.svg" width={16} height={16} alt="ETH icon" />
        </Price>
      );
    },
  },
  {
    field: "from",
    headerName: "From",
    sortable: false,
    width: 130,
  },
  {
    field: "to",
    headerName: "To",
    sortable: false,
    width: 130,
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    activityIcon: <ShoppingCartIcon fontSize="small" />,
    activityState: "Sold",
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    price: 0.02,
    from: "Ralph Garraway",
    to: "Fungles Assets",
    time: "22 seconds ago",
  },
  {
    id: 2,
    activityIcon: <ShoppingCartIcon fontSize="small" />,
    activityState: "Sold",
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    price: 0.02,
    from: "Ralph Garraway",
    to: "Fungles Assets",
    time: "22 seconds ago",
  },
  {
    id: 3,
    activityIcon: <ShoppingCartIcon fontSize="small" />,
    activityState: "Sold",
    image: "/NFT.png",
    creatorName: "Ralph Garraway",
    collectionName: "Test",
    price: 0.02,
    from: "Ralph Garraway",
    to: "Fungles Assets",
    time: "22 seconds ago",
  },
];

export default function ActivityTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        sx={{ border: "none" }}
      />
    </div>
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
}));
