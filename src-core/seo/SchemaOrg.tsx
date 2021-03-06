import React from "react";
import { Helmet } from "react-helmet";

import { IOpenGraphProps } from "./OpenGraph";

export interface ISchemaOrgProps extends IOpenGraphProps {
  author: string;
  datePublished?: string;
}

export const SchemaOrg = ({
  title,
  imageSrc,
  description,
  isBlogPost,
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
  const schema = isBlogPost ? postSchema : baseSchema;

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
