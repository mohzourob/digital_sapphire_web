import NFTImage from "../../../public/NFT.png";

import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import styled from "@emotion/styled";
import CollectionCard from "./CollectionCard";
import Carousel from "../../Global/Common/Carousel";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const responsive = {
  550: { items: 1 },
  850: { items: 2 },
  1200: { items: 3 },
};

const items = [
  <CollectionCard
    key="1"
    name="Hamlet Contemplates Yorick's"
    creator="Sami"
    itemsNumber={23}
    image={NFTImage}
    verified
  />,
  <CollectionCard
    key="2"
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    itemsNumber={23.3}
    image={NFTImage}
  />,
  <CollectionCard
    key="3"
    name="Hamlet Contemplates Yorick's"
    creator="Samisswwwwwwwwwwwwwssdasdasdsads"
    itemsNumber={100}
    image={NFTImage}
  />,
  <CollectionCard
    key="4"
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    itemsNumber={1000.8888888}
    image={NFTImage}
  />,
  <CollectionCard
    key="5"
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    itemsNumber={22}
    image={NFTImage}
  />,
];

const TopCollectionsCarousel = () => {
  const { t } = useTranslation("homePage");
  const router = useRouter();

  return (
    <Container maxWidth="lg">
      <Stack marginTop="3rem">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          dir={router.locale === "en" ? "ltr" : "rtl"}
        >
          <Grid item>
            <Typography
              variant="h6"
              color="text.secondButton"
              sx={{
                marginRight: router.locale === "ar" ? "3rem" : "0rem",
                marginLeft: router.locale === "en" ? "3rem" : "0rem",
              }}
            >
              {t("topCollections")}
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/explore-collection" passHref>
              <Explore
                color="text.secondButton"
                sx={{
                  marginRight: router.locale === "en" ? "3rem" : "0rem",
                  marginLeft: router.locale === "ar" ? "3rem" : "0rem",
                }}
              >
                {t("exploreMore")}
              </Explore>
            </Link>
          </Grid>
        </Grid>
        <Carousel items={items} responsive={responsive} />
      </Stack>
    </Container>
  );
};

const Explore = styled(MUILink)`
  position: relative;
  text-transform: uppercase;
  font-size: 1rem;
  text-decoration: none;
  border-bottom: 1px solid #ff7746;

  &:hover {
    border-bottom: 2px solid #ff7746;
  }
`;

export default TopCollectionsCarousel;
