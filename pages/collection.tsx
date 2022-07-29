import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import Collection from "../components/CollectionPage/Collection";
import Head from "next/head";

const CollectionPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Digital Sapphire Collections</title>
      </Head>
      <Collection />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default CollectionPage;
