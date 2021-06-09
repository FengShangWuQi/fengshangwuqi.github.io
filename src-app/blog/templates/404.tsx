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

      <div
        css={(ds: ITheme) => ({
          padding: `0 ${ds.spacing[4]}`,
        })}>
        <Link
          to="/"
          css={(ds: ITheme) =>
            mq(["lg"], {
              fontSize: [ds.size["2xl"], ds.size["3xl"]],
              lineHeight: ["60px", "80px"],
            })
          }>
          枫上雾棋的日志
        </Link>

        <div
          css={(ds: ITheme) => ({
            fontSize: ds.size.sm,
            color: ds.colorPalette.gray["500"],
          })}>
          唔...该页面不存在
        </div>

        <StaticImage
          src="../images/404.svg"
          alt="404"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </Layout>
  );
};

export default NotFound;
