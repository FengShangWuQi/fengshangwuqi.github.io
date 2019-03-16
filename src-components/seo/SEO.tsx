import React from "react";
import Helmet from "react-helmet";

import { OpenGraph } from "./OpenGraph";
import { TwitterCard } from "./TwitterCard";
import { SchemaOrg, ISchemaOrgProps } from "./SchemaOrg";

export interface IBaseSEO {
  title: string;
  description: string;
  imageSrc: string;
}

export interface ISEOProps extends ISchemaOrgProps {
  keywords: string[];
}

export const SEO = ({
  keywords,
  twitter,
  isBlogPost,
  url,
  author,
  datePublished,
  github,
  siteUrl,
  ...baseProps
}: ISEOProps) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "zh-CN" }}
        title={baseProps.title}
        link={[
          {
            rel: "canonical",
            href: url,
          },
        ]}
        meta={[
          {
            charSet: "utf-8",
          },
          {
            name: "description",
            content: baseProps.description,
          },
        ].concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )}
      />
      <OpenGraph {...baseProps} url={url} isBlogPost={isBlogPost} />
      <TwitterCard {...baseProps} twitter={twitter} />
      <SchemaOrg
        {...baseProps}
        url={url}
        author={author}
        datePublished={datePublished}
        github={github}
        twitter={twitter}
        siteUrl={siteUrl}
        isBlogPost={isBlogPost}
      />
    </>
  );
};
