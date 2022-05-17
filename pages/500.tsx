import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

import Layout from "../components/HOC/Layout";

const Custom500: NextPage = () => {
  return (
    <Layout noFooter>
      <Stack justifyContent="center" alignItems="center" marginY="4rem">
        <ImageWrapper>
          <Image src={"/500.png"} layout="fill" />
        </ImageWrapper>

        <Typography
          variant="h6"
          color="text.primary"
          marginTop="2rem"
          fontWeight={800}
        >
          Internal Server Error
        </Typography>

        <Typography variant="body2" color="text.secondary" marginY="1rem">
          There's a server error please try again
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
  width: 350px;
  height: 260px;
  position: relative;
`;

export default Custom500;
