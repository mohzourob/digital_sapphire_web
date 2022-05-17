import { SyntheticEvent, useState } from "react";
import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ItemsFilter from "../Global/ItemsFilter";
import NFTItemCard from "../HomePage/TopItems/NFTItemCard";
import SearchInput from "../Global/Navbar/SearchInput";

import NFTImage from "../../public/NFT.png";
import styled from "@emotion/styled";
import ActivityTab from "./ActivityTab";

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
const CollectionTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <CustomTabs value={value} onChange={handleChange}>
          <Tab
            icon={<FormatListBulletedOutlinedIcon />}
            iconPosition="start"
            label="Items"
          />
          <Tab label="Activity" icon={<TimelineIcon />} iconPosition="start" />
        </CustomTabs>
        <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
          <TabPanel value={value} index={0}>
            <Stack>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                marginTop={5}
                wrap="nowrap"
              >
                <Grid item md={5}>
                  <SearchInput
                    text="Search items, collection and accounts"
                    small
                  />
                </Grid>
                <Grid item>
                  <ItemsFilter />
                </Grid>
              </Grid>

              <Grid container marginY={5} justifyContent="space-between">
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={23.3}
                  image={NFTImage}
                  likedNumber={200}
                  owner
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samisswwwwwwwwwwwwwssdasdasdsads"
                  price={100}
                  image={NFTImage}
                  likedNumber={300}
                  owner
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={1000.8888888}
                  image={NFTImage}
                  likedNumber={400}
                  owner
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={22}
                  image={NFTImage}
                  likedNumber={500}
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={22}
                  image={NFTImage}
                  likedNumber={500}
                />
                <NFTItemCard
                  name="Hamlet Contemplates Yorick's"
                  creator="Samiss"
                  price={22}
                  image={NFTImage}
                  likedNumber={500}
                />
              </Grid>
            </Stack>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <ActivityTab />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
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
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
    "& button": {
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: "600",
    },
  };
});

export default CollectionTabs;
