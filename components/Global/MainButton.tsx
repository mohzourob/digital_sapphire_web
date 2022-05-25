import { Button as MuiButton } from "@mui/material";

const MainButton = (props: any) => {
  return (
    <MuiButton
      sx={{
        bgcolor: "secondary.main",
        color: "text.button",
        textTransform: "none",
        fontSize: "0.8rem",
        fontWeight: "500",
        padding: "0.6rem 3rem",
        border: "1px solid",
        borderColor: "secondary.main",
        borderRadius: "8px",
        ":hover": {
          bgcolor: "transparent",
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

export default MainButton;
