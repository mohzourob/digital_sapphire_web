import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import WatchList from "../components/WatchListPage/WatchList";

const WatchListPage: NextPage = () => {
  return (
    <Layout noFooter>
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
