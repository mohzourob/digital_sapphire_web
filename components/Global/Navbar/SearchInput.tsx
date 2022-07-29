import styled from "@emotion/styled";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = ({ onsubmit, text, small }: any) => {
  return (
    <StyledPaper
      sx={{
        borderRadius: small ? "8px" : "24px",
        height: small ? "35px" : "45px",
      }}
      component="form"
      onSubmit={() => onsubmit()}
    >
      <IconButton
        type="submit"
        sx={{ p: small ? "5px" : "10px" }}
        aria-label="search"
      >
        <SearchIcon width="1.5em" color="secondary" />
      </IconButton>
      <StyledSearchInput placeholder={text} />
    </StyledPaper>
  );
};

const StyledSearchInput = styled(InputBase)`
  width: 100%;
  font-size: 1rem;
`;

const StyledPaper = styled(Paper)(({ theme }: any) => {
  return {
    display: "flex",
    transition: "none",
    boxShadow: "none",
    width: "100%",
    padding: "0rem 0.8rem",
    fontSize: "0.7rem",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.border}`,
    ":focus-within": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  };
});

export default SearchInput;
