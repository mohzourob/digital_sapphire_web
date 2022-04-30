import styled from "@emotion/styled";

import { Button as MuiButton } from "@mui/material";

const SecondaryButton = (props: any) => {
  return (
    <MuiButton
      sx={{
        bgcolor: "transparent",
        color: "text.button",
        textTransform: "none",
        fontSize: `${props.size === "small" ? "0.78rem" : "0.8rem"}`,
        padding: `${props.size === "small" ? "0.6rem" : "0.6rem 3.5rem"}`,
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: "8px",
        ":hover": {
          bgcolor: "transparent",
          borderColor: "secondary.main",
          color: "secondary.main",
        },
      }}
      variant="contained"
      {...props}
    >
      {props.children}
    </MuiButton>
  );
};

export default SecondaryButton;
