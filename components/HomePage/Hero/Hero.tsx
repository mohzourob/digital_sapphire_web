import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { Grid, Container, Typography, Stack } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";

import MainButton from "../../Global/MainButton";
import SecondaryButton from "../../Global/SecondaryButton";

import monlizaImage from "../../../public/monlizaImage.png";

import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();
  const { t } = useTranslation("homePage");

  return (
    <Container maxWidth="md" dir={router.locale === "en" ? "ltr" : "rtl"}>
      <StyledGrid container>
        <StyledMain item container md={6}>
          <Stack>
            <Grid item>
              <StyledHead variant="h1" color="text.primary">
                {t("heroHeader")}
              </StyledHead>
              <StyledBody variant="body2" color="text.secondary">
                {t("heroSubHeader")}
              </StyledBody>
            </Grid>
            <Grid item>
              <Link href="/explore-item" passHref>
                <span>
                  <MainButton
                    style={{
                      marginRight: router.locale === "en" ? "1rem" : "0rem",
                      marginLeft: router.locale === "en" ? "0rem" : "1rem",
                    }}
                  >
                    {t("explore")}
                  </MainButton>
                </span>
              </Link>
              <Link href="/create-new-item" passHref>
                <span>
                  <SecondaryButton>{t("create")}</SecondaryButton>
                </span>
              </Link>
            </Grid>
            <Grid item my={6}>
              <Link href="/about" passHref>
                <StyledLink>
                  <PlayCircleFilledIcon
                    style={{
                      marginRight: router.locale === "en" ? "0.5rem" : "0rem",
                      marginLeft: router.locale === "en" ? "0rem" : "0.5rem",
                    }}
                  />
                  {t("learn")}
                </StyledLink>
              </Link>
            </Grid>
          </Stack>
        </StyledMain>
        <Grid
          container
          item
          xs={6}
          md={5}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <ImageWraper>
              <Image
                alt="main pic"
                src={monlizaImage}
                width={430}
                height={500}
                loading="lazy"
              />
            </ImageWraper>
          </Grid>
        </Grid>
      </StyledGrid>
    </Container>
  );
};

const ImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    border-radius: 15px;
  }
`;

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 1rem;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin-top: 1rem;
  }
`;

const StyledMain = styled(Grid)`
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const StyledHead = styled(Typography)`
  font-size: 36px;
  line-height: 50px;
  font-weight: 700;
  margin-top: 3rem;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;

const StyledBody = styled(Typography)`
  max-width: 50%;
  font-size: 1.1rem;
  margin: 1rem 0rem 3rem;

  @media (max-width: 900px) {
    margin: 1rem auto;
  }
`;

const StyledLink = styled.a(({ theme }: any) => {
  return {
    textTransform: "capitalize",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    color: theme.palette.text.primary,
    textDecoration: "none",

    ":hover": {
      textDecoration: "underline",
    },

    "@media (max-width: 900px)": {
      margin: "auto",
      justifyContent: "center",
    },
  };
});

export default Hero;
