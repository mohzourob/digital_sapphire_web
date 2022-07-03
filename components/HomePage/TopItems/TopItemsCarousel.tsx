import Link from "next/link";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import styled from "@emotion/styled";

import NFTItemCard from "./NFTItemCard";
import Carousel from "../../Global/Carousel";

import NFTImage from "../../../public/NFT.png";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const responsive = {
  0: { items: 1 },
  550: { items: 2 },
  800: { items: 3 },
  1080: { items: 4 },
};

const items = [
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Sami"
    price={23}
    image={NFTImage}
    likedNumber={100}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={23.3}
    image={NFTImage}
    likedNumber={200}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samisswwwwwwwwwwwwwssdasdasdsads"
    price={100}
    image={NFTImage}
    likedNumber={300}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={1000.8888888}
    image={NFTImage}
    likedNumber={400}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={22}
    image={NFTImage}
    likedNumber={500}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={22}
    image={NFTImage}
    likedNumber={500}
  />,
  <NFTItemCard
    name="Hamlet Contemplates Yorick's"
    creator="Samiss"
    price={22}
    image={NFTImage}
    likedNumber={500}
  />,
];

const TopItemsCarousel = () => {
  const router = useRouter();
  const { t } = useTranslation("homePage");

  return (
    <Container maxWidth="xl">
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
              color="text.primary"
              sx={{
                marginRight: router.locale === "ar" ? "3rem" : "0rem",
                marginLeft: router.locale === "en" ? "3rem" : "0rem",
              }}
            >
              {t("topItems")}
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/explore-item" passHref>
              <Explore
                color="text.primary"
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

export default TopItemsCarousel;
