import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import Layout from "../components/HOC/Layout";
import Login from "../components/LoginPage/Login";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Digital Sapphire Login</title>
      </Head>
      <Login />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["homePage"])),
  },
});

export default LoginPage;
