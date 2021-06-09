import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";

import { Layout, Center } from "../common/Layout";
import { Header } from "../common/Header";

export const notFoundQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const NotFound = ({ data: { site }, pageContext: { groups } }: any) => {
  return (
    <Layout>
      <Helmet
        title={site.title}
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
