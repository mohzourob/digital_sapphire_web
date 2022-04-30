import styled from "@emotion/styled";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ onsubmit }: any) => {
  return (
    <StyledPaper component="form" elevation={1} onSubmit={() => onsubmit()}>
      <IconButton type="submit" sx={{ p: "5px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <StyledSearchInput placeholder="Search items, collection and accounts" />
    </StyledPaper>
  );
};

const StyledSearchInput = styled(InputBase)`
  width: 100%;
  font-size: 0.8rem;
`;

const StyledPaper = styled(Paper)(({ theme }: any) => {
  return {
    display: "flex",
    width: "100%",
    height: "45px",
    padding: "0rem 0.8rem",
    fontSize: "0.7rem",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.text.primary}`,
    borderRadius: "24px",
    ":focus-within": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  };
});

export default SearchInput;
