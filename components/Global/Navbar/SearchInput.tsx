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
      elevation={1}
      onSubmit={() => onsubmit()}
    >
      <IconButton
        type="submit"
        sx={{ p: small ? "0px" : "5px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <StyledSearchInput placeholder={text} />
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
    padding: "0rem 0.8rem",
    fontSize: "0.7rem",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.text.primary}`,
    ":focus-within": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
  };
});

export default SearchInput;
