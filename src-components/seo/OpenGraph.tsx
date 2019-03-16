import React from "react";
import Helmet from "react-helmet";

import { IBaseSEO } from "./SEO";

export interface IOpenGraphProps extends IBaseSEO {
  url: string;
  isBlogPost?: boolean;
}

export const OpenGraph = ({
  title,
  description,
  url,
  imageSrc,
  isBlogPost,
}: IOpenGraphProps) => {
  return (
    <Helmet
      meta={[
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:description",
          content: description,
        },
        {
          name: "og:type",
          content: isBlogPost ? "article" : "website",
        },
        {
          name: "og:url",
          content: url,
        },
        {
          name: "og:image",
          content: imageSrc,
        },
      ]}
    />
  );
};
