import { NextPage } from "next";
import ExploreCollection from "../components/ExploreCollection";
import Layout from "../components/HOC/Layout";

const ExploreCollectionPage: NextPage = () => {
  return (
    <Layout>
      <ExploreCollection />
    </Layout>
  );
};

export default ExploreCollectionPage;
