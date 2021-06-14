import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet-async";

import { Layout, Nav } from "../common";

const useSiteMetadata = () => {
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

const NotFound = () => {
  const { title } = useSiteMetadata();

  return (
    <Layout>
      <Helmet title={title} />

      <Nav pathname="/404" />

      <StaticImage
        src="../images/404.svg"
        alt="404"
        placeholder="blurred"
        layout="fullWidth"
      />
    </Layout>
  );
};

export default NotFound;
