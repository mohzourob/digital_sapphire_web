import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ExploreItem from "../components/ExplorePages/ExploreItem";
import Layout from "../components/HOC/Layout";

const ExploreItemPage: NextPage = () => {
  return (
    <Layout>
      <ExploreItem />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default ExploreItemPage;
