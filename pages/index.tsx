import type { NextPage } from "next";

import Hero from "../components/Hero";
import Layout from "../components/HOC/Layout";
import TopItemsCarousel from "../components/TopItemsCarousel";
import TopCollectionsCarousel from "../components/TopCollectionsCarousel";
import TopOrganizationCarousel from "../components/TopOrganizationCarousel";
import TopSeller from "../components/TopSeller";
import About from "../components/About";
import YouTubeVideo from "../components/YouTubeVideo";

const Home: NextPage = () => {
  return (
    <Layout>
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

export default Home;
