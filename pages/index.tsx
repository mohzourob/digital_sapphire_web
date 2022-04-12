import { Box, Button, IconButton } from "@mui/material";
import type { NextPage } from "next";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { toggleTheme } from "../features/themeSlice";
import Layout from "../components/HOC/Layout";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootStateOrAny) => state.theme.theme);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      >
        {theme} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleTheme())}
          color="inherit"
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Button
          style={{ textTransform: "none" }}
          variant="outlined"
          disableRipple
        >
          Test
        </Button>
      </Box>
    </Layout>
  );
};

export default Home;
