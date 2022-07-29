import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import ProfileSettings from "../components/Forms/ProfileSettings";
import Head from "next/head";

const ProfileSettingsPage: NextPage = () => {
  return (
    <Layout noFooter>
      <Head>
        <title>Digital Sapphire profile settings</title>
      </Head>
      <ProfileSettings />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default ProfileSettingsPage;
