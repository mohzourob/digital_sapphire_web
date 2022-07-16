import Link from "next/link";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import styled from "@emotion/styled";
import OrganizationCard from "./OrganizationCard";
import Carousel from "../../Global/Common/Carousel";

import NFTImage from "../../../public/NFT.png";
import banner from "../../../public/banner.png";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const responsive = {
  660: { items: 2 },
  900: { items: 3 },
  1200: { items: 4 },
};

const items = [
  <OrganizationCard
    name="Sami"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Sami"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Sami"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Sami sabbah"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua."
  />,
  <OrganizationCard
    name="Samisdsadasasdasdasdasdasdd"
    image={NFTImage}
    bannerImage={banner}
    description="Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua. Amet minim mollit non deserunt ullamco
  est sit aliqua est sit aliqua est sit aliqua
  est sit aliquaest sit aliqua est sit aliqua est
  sit aliqua est sit aliqua"
  />,
];

const TopOrganizationCarousel = () => {
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
              {t("topOrganizations")}
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/explore-org" passHref>
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

export default TopOrganizationCarousel;
