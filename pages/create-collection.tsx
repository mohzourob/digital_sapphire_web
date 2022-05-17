import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import CreateCollectionForm from "../components/Forms/CreateCollectionForm";

const CreateCollectionPage: NextPage = () => {
  return (
    <Layout>
      <CreateCollectionForm />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default CreateCollectionPage;
