import { NextPage } from "next";
import ExploreItem from "../components/ExploreItem";
import Layout from "../components/HOC/Layout";

const ExploreItemPage: NextPage = () => {
  return (
    <Layout>
      <ExploreItem />
    </Layout>
  );
};

export default ExploreItemPage;
