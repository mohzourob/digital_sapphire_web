import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "../components/HOC/Layout";
import Profile from "../components/ProfilePage/Profile";

const ProfilePage: NextPage = () => {
  return (
    <Layout>
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
