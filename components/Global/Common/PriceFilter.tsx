import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Grid,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import MainButton from "./MainButton";
import ETH from "../../../public/ETH.svg";
import Image from "next/image";

interface State {
  from: number | null;
  to: number | null;
}

const PriceFilter = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [values, setValues] = useState<State>({
    from: null,
    to: null,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <>
      <StyledButton
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Price range
      </StyledButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem disableRipple>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Stack>
                <Typography variant="body2" color="text.primary">
                  Min. Price
                </Typography>
                <OutlinedInput
                  id="from"
                  value={values.from}
                  placeholder="From"
                  onChange={handleChange("from")}
                  endAdornment={
                    <InputAdornment position="end">
                      <Image
                        alt="Eth icon"
                        src={ETH}
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    </InputAdornment>
                  }
                  sx={{
                    height: "30px",
                    fontSize: "0.8rem",
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack>
                <Typography variant="body2" color="text.primary">
                  Max. Price
                </Typography>
                <OutlinedInput
                  id="to"
                  value={values.to}
                  placeholder="To"
                  onChange={handleChange("to")}
                  endAdornment={
                    <InputAdornment position="end">
                      <Image
                        alt="Eth icon"
                        src={ETH}
                        width={18}
                        height={18}
                        loading="lazy"
                      />
                    </InputAdornment>
                  }
                  sx={{ height: "30px", fontSize: "0.9rem" }}
                />
              </Stack>
            </Grid>
          </Grid>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem disableRipple>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                variant="text"
                color="error"
                sx={{ textTransform: "none" }}
              >
                Clear
              </Button>
            </Grid>
            <Grid item>
              <MainButton style={{ padding: "6px 8px" }}>Apply</MainButton>
            </Grid>
          </Grid>
        </MenuItem>
      </StyledMenu>
    </>
  );
};

const StyledButton = styled(Button)(({ theme }: any) => {
  return {
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.border}`,
    borderRadius: "5px",
    textTransform: "none",
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
  };
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }: any) => ({
  "& .MuiPaper-root": {
    width: "200px",
    borderRadius: 6,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  "& .MuiMenuItem-root": {
    cursor: "auto",
    ":hover": {
      backgroundColor: theme.palette.primary.nav,
    },
  },
}));

export default PriceFilter;
