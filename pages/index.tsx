import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import Layout from "../components/HOC/Layout";
import About from "../components/HomePage/About/About";
import Hero from "../components/HomePage/Hero/Hero";
import TopCollectionsCarousel from "../components/HomePage/TopCollection/TopCollectionsCarousel";
import TopItemsCarousel from "../components/HomePage/TopItems/TopItemsCarousel";
import TopOrganizationCarousel from "../components/HomePage/TopOrganication/TopOrganizationCarousel";
import TopSeller from "../components/HomePage/TopSeller/TopSeller";
import YouTubeVideo from "../components/HomePage/YouTubeVideo";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Digital Sapphire</title>
      </Head>
      <Hero />
      <TopItemsCarousel />
      <TopCollectionsCarousel />
      <TopOrganizationCarousel />
      <TopSeller />
      <About />
      <YouTubeVideo />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default Home;
