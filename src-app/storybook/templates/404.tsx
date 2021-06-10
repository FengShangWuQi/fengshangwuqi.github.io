import React from "react";
import { Helmet } from "react-helmet-async";

import { Layout, Center } from "../common/Layout";
import { Header } from "../common/Header";

import { useSiteMetadata } from "./storybook-index";

const NotFound = ({ pageContext: { groups } }: any) => {
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <Helmet
        title={title}
        meta={[
          {
            name: "viewport",
            content: "user-scalable=no",
          },
        ]}
      />

      <Header groups={groups} />
      <Center>唔...该页面不存在</Center>
    </Layout>
  );
};

export default NotFound;
