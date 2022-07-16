import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/HOC/Layout";
const Custom404: NextPage = () => {
  return (
    <Layout noFooter>
      <Head>
        <title>404 Error</title>
      </Head>
      <Stack justifyContent="center" alignItems="center" marginY="4rem">
        <ImageWrapper>
          <Image src={"/404.png"} layout="fill" />
        </ImageWrapper>

        <Typography
          variant="h6"
          color="text.primary"
          marginY="2rem"
          fontWeight={800}
        >
          Sorry, Page Not Found
        </Typography>

        <Button
          href="/"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "text.primary",
            padding: "0.6rem 3rem",
            backgroundColor: "#FF7746",
            ":hover": {
              backgroundColor: "#e4825e",
            },
          }}
        >
          Back Home
        </Button>
      </Stack>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

const ImageWrapper = styled.div`
  width: 353px;
  height: 330px;
  position: relative;
`;

export default Custom404;
