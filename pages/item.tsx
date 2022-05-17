import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import ItemDetails from "../components/ItemPage/ItemDetails";

const ItemPage: NextPage = () => {
  return (
    <Layout>
      <ItemDetails />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default ItemPage;
