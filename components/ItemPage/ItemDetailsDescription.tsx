import { SyntheticEvent, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Grid, Stack } from "@mui/material";
import ActivityTable from "../Global/ActivityTable";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ItemDetailsDescription = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <CustomTabs value={value} onChange={handleChange}>
        <Tab label="Info" />
        <Tab label="History" />
      </CustomTabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Info>
            <Grid
              container
              columnSpacing={2}
              alignItems="center"
              marginBottom={1}
            >
              <Grid item>
                <Typography
                  color="text.primary"
                  fontWeight={100}
                  variant="body2"
                >
                  Artist :
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="text.primary" variant="body1">
                  Freddie Carpenter
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              columnSpacing={2}
              alignItems="center"
              marginBottom={1}
            >
              <Grid item>
                <Typography
                  color="text.primary"
                  fontWeight={100}
                  variant="body2"
                >
                  Create :
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="text.primary" variant="body1">
                  04 April , 2021
                </Typography>
              </Grid>
            </Grid>

            <Grid container columnSpacing={2} alignItems="center">
              <Grid item>
                <Typography
                  color="text.primary"
                  fontWeight={100}
                  variant="body2"
                >
                  Collection :
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="text.primary" variant="body1">
                  Cyberpunk City Art
                </Typography>
              </Grid>
            </Grid>
          </Info>
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
          <ActivityTable />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

const CustomTabs = styled(Tabs)(({ theme }: any) => {
  return {
    borderBottom: `1px solid ${theme.palette.border}`,
    "& .MuiTabs-indicator": {
      height: "5px",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "#FF7746",
    },
    "& button": {
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: "600",
    },
  };
});

const Info = styled(Stack)(({ theme }: any) => {
  return {
    width: "100%",
    padding: "1rem 0",
    borderRadius: "12px",
    color: theme.palette.secondary.back,
  };
});

export default ItemDetailsDescription;
