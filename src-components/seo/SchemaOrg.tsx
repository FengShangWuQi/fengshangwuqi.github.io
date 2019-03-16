import React from "react";
import Helmet from "react-helmet";

import { IOpenGraphProps } from "./OpenGraph";
import { ITwitterCardProps } from "./TwitterCard";

export interface ISchemaOrgProps extends IOpenGraphProps, ITwitterCardProps {
  author: string;
  datePublished?: string;
  github: string;
  siteUrl: string;
}

export const SchemaOrg = ({
  title,
  imageSrc,
  description,
  isBlogPost,
  url,
  author,
  datePublished,
  twitter,
  github,
  siteUrl,
}: ISchemaOrgProps) => {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
    },
  ];
  const listSchema = [
    ...baseSchema,
    {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": siteUrl,
            name: "blog",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id": `${siteUrl}/archive`,
            name: "archive",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id": `https://github.com/${github}`,
            name: "GitHub",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@id": `https://twitter.com/${twitter.slice(1)}`,
            name: "Twitter",
          },
        },
      ],
    },
  ];
  const postSchema = [
    ...baseSchema,
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url,
      name: title,
      headline: title,
      image: imageSrc,
      description,
      author: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Person",
        name: author,
      },
      datePublished,
    },
  ];
  const schema = isBlogPost ? postSchema : listSchema;

  return (
    <Helmet
      script={[
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ]}
    />
  );
};
