import React from "react";
import { Helmet } from "react-helmet-async";

import { OpenGraph } from "./open-graph";
import { TwitterCard } from "./twitter-card";
import { SchemaOrg, ISchemaOrgProps } from "./schema-org";

export interface IBaseSEO {
  title: string;
  description: string;
  image: string;
}

export interface ISEOProps extends Omit<ISchemaOrgProps, "type"> {
  keywords: string[];
  type?: string;
  creator?: string;
}

export const SEO = ({
  keywords,
  type = "website",
  url,
  author,
  datePublished,
  creator = "@fengshangwuqi",
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
      <OpenGraph {...baseProps} {...{ url, type }} />
      <TwitterCard {...baseProps} creator={creator} />
      <SchemaOrg
        {...baseProps}
        {...{
          url,
          author,
          datePublished,
          type,
        }}
      />
    </>
  );
};
