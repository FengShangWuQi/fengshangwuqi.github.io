import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet-async";

import { ITheme } from "src-core/ds";
import { mq } from "src-core/style";

import { Layout } from "../common";

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

      <Link
        to="/"
        css={(ds: ITheme) =>
          mq(["lg"], {
            marginLeft: ds.spacing[4],
            fontSize: [ds.size["2xl"], ds.size["3xl"]],
            lineHeight: ["60px", "80px"],
          })
        }>
        枫上雾棋的日志
      </Link>

      <div
        css={(ds: ITheme) => ({
          marginLeft: ds.spacing[4],
        })}>
        <div
          css={(ds: ITheme) => ({
            fontSize: ds.size.sm,
            color: ds.colorPalette.gray["500"],
          })}>
          唔...该页面不存在
        </div>
      </div>

      <StaticImage
        src="../images/404.jpg"
        alt="404"
        placeholder="blurred"
        layout="fullWidth"
      />
    </Layout>
  );
};

export default NotFound;
