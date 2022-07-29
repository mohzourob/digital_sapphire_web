import Link from "next/link";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Link as MUILink,
} from "@mui/material";
import styled from "@emotion/styled";
import SellerCard from "./SellerCard";
import profileImage from "../../../public/profile-pic.png";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const sellers = [
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
  {
    image: profileImage,
    name: "Crispin Berry",
    sales: 22.3,
    verified: true,
  },
];

const TopSeller = () => {
  const { t } = useTranslation("homePage");
  const router = useRouter();

  return (
    <Container maxWidth="lg" dir={router.locale === "en" ? "ltr" : "rtl"}>
      <Stack marginTop="4rem" marginBottom="2rem">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography
              variant="h6"
              color="text.secondButton"
              sx={{
                marginRight: router.locale === "ar" ? "3rem" : "0rem",
                marginLeft: router.locale === "en" ? "3rem" : "0rem",
              }}
            >
              {t("topSeller")}
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/explore-sellers" passHref>
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

        <Wrapper>
          <Grid container columnSpacing={2} rowSpacing={2}>
            {sellers.map((seller, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={index}>
                <SellerCard
                  image={seller.image}
                  name={seller.name}
                  sales={seller.sales}
                  verified={seller.verified}
                />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem 3rem 1rem 3rem;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export default TopSeller;
