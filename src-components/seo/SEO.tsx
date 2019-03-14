import React from "react";
import Helmet from "react-helmet";

import { OpenGraph } from "./OpenGraph";
import { TwitterCard } from "./TwitterCard";
import { SchemaOrg } from "./SchemaOrg";

export const SEO = ({
  title,
  description,
  keywords,
  url,
  imageSrc,
  author,
  isBlogPost,
  datePublished,
  twitterCreator,
}: {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  imageSrc: string;
  author: string;
  twitterCreator: string;
  isBlogPost?: boolean;
  datePublished?: string;
}) => {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: "zh-CN" }}
        title={title}
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
            content: description,
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
      <OpenGraph
        title={title}
        url={url}
        imageSrc={imageSrc}
        isBlogPost={isBlogPost}
      />
      <TwitterCard
        title={title}
        description={description}
        imageSrc={imageSrc}
        creator={twitterCreator}
      />
      <SchemaOrg
        title={title}
        url={url}
        imageSrc={imageSrc}
        description={description}
        author={author}
        isBlogPost={isBlogPost}
        datePublished={datePublished}
      />
    </>
  );
};
