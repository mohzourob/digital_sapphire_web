import styled from "@emotion/styled";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import walletSvg from "../../../public/walletSvg.svg";
import CollectionSvg from "../../../public/CollectionSvg.svg";
import ImageSvg from "../../../public/ImageSvg.svg";
import ListSvg from "../../../public/ListSvg.svg";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const About = () => {
  const { t } = useTranslation("homePage");
  const router = useRouter();

  const about = [
    {
      image: walletSvg,
      title: t("aboutWalletHeader"),
      description: t("aboutWalletDescription"),
    },

    {
      image: CollectionSvg,
      title: t("aboutCollectionHeader"),
      description: t("aboutCollectionDescription"),
    },
    {
      image: ImageSvg,
      title: t("aboutNFTHeader"),
      description: t("aboutNFTDescription"),
    },
    {
      image: ListSvg,
      title: t("aboutListHeader"),
      description: t("aboutListDescripion"),
    },
    {
      image: ListSvg,
      title: t("aboutListHeader"),
      description: t("aboutListDescripion"),
    },
    {
      image: ListSvg,
      title: t("aboutListHeader"),
      description: t("aboutListDescripion"),
    },
  ];

  return (
    <Container maxWidth="md" dir={router.locale === "en" ? "ltr" : "rtl"}>
      <Stack>
        <Title variant="h1" color="text.primary">
          {t("aboutHeader")}
        </Title>
        <Grid container justifyContent="space-around" marginTop={4}>
          {about.map((item, index) => (
            <Grid item xs={10} md={4} lg={4} key={index} marginBottom={4}>
              <Stack>
                <Image
                  src={item.image}
                  alt="svg icon"
                  width={50}
                  height={50}
                  loading="lazy"
                />
                <SubTitle variant="subtitle1" color="text.primary">
                  {item.title}
                </SubTitle>
                <Body1 variant="body1" color="text.primary">
                  {item.description}
                </Body1>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
};

const Title = styled(Typography)`
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;

const SubTitle = styled(Typography)`
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 1rem;
  text-align: center;

  @media (max-width: 700px) {
    margin-top: 1rem;
  }
`;

const Body1 = styled(Typography)`
  font-size: 1rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 90%;
  margin: auto;
`;

export default About;
