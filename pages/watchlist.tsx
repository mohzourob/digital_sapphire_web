import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import Layout from "../components/HOC/Layout";
import WatchList from "../components/WatchListPage/WatchList";

const WatchListPage: NextPage = () => {
  return (
    <Layout noFooter>
      <Head>
        <title>Digital Sapphire WachList</title>
      </Head>
      <WatchList />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default WatchListPage;
