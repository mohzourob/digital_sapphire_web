import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import ExploreCollection from "../components/ExplorePages/ExploreCollection";

import Layout from "../components/HOC/Layout";

const ExploreCollectionPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Digital Sapphire explore collections</title>
      </Head>
      <ExploreCollection />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default ExploreCollectionPage;
