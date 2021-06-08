import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet-async";

import { Layout, Center } from "../common/Layout";
import { Header } from "../common/Header";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

const StorybookIndex = ({ pageContext: { groups } }: any) => {
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
      <Center>欢迎来到「 {title} 」</Center>
    </Layout>
  );
};

export default StorybookIndex;
