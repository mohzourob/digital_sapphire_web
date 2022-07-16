import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import Layout from "../components/HOC/Layout";
import Profile from "../components/ProfilePage/Profile";

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Digital Sapphire Profile</title>
      </Head>
      <Profile />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default ProfilePage;
