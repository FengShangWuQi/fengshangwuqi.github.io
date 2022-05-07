import React from "react";
import { Helmet } from "react-helmet-async";

import { IOpenGraphProps } from "./open-graph";

export interface ISchemaOrgProps extends IOpenGraphProps {
  author?: string;
  datePublished?: string;
}

export const SchemaOrg = ({
  title,
  image,
  description,
  type,
  url,
  author,
  datePublished,
}: ISchemaOrgProps) => {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
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
      image,
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
  const schema = type === "website" ? baseSchema : postSchema;

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
