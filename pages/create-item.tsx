import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import CreateItemForm from "../components/Forms/CreateItemForm";

const CreateItemPage: NextPage = () => {
  return (
    <Layout>
      <CreateItemForm />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default CreateItemPage;
