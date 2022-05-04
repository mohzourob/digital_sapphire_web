import styled from "@emotion/styled";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

const children = [
  <ToggleButton value="all" key="all" sx={{ marginRight: "1rem" }}>
    All
  </ToggleButton>,
  <ToggleButton
    value="collectibles"
    key="collectibles"
    sx={{ marginRight: "1rem" }}
  >
    Collectibles
  </ToggleButton>,
  <ToggleButton value="sports" key="sports" sx={{ marginRight: "1rem" }}>
    Sports
  </ToggleButton>,
  <ToggleButton value="music" key="music" sx={{ marginRight: "1rem" }}>
    Music
  </ToggleButton>,
  <ToggleButton value="art" key="art">
    Art
  </ToggleButton>,
];

const ExploreFilter = () => {
  const [filter, setFilter] = useState("all");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newFilter: string
  ) => {
    setFilter(newFilter);
  };

  const control = {
    value: filter,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <ToggleGroup size="small" {...control}>
      {children}
    </ToggleGroup>
  );
};

const ToggleGroup = styled(ToggleButtonGroup)(({ theme }: any) => {
  return {
    "& button": {
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.border} !important`,
      borderRadius: "5px !important",
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    },
  };
});

export default ExploreFilter;
