import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import Collection from "../components/CollectionPage/Collection";

const CollectionPage: NextPage = () => {
  return (
    <Layout>
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
