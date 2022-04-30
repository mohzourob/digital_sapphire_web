import type { NextPage } from "next";
import Hero from "../components/Hero";
import Layout from "../components/HOC/Layout";
import TopItemsCarousel from "../components/TopItemsCarousel";
import Navbar from "../components/Navbar";
import TopCollectionsCarousel from "../components/TopCollectionsCarousel";
import TopOrganizationCarousel from "../components/TopOrganizationCarousel";

const Home: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <TopItemsCarousel />
      <TopCollectionsCarousel />
      <TopOrganizationCarousel />
    </Layout>
  );
};

export default Home;
