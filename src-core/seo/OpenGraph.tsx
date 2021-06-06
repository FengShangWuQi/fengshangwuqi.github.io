import React from "react";
import { Helmet } from "react-helmet";

import { IBaseSEO } from "./SEO";

export interface IOpenGraphProps extends IBaseSEO {
  url: string;
  type: string;
}

export const OpenGraph = ({
  title,
  description,
  image,
  url,
  type,
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
          content: type,
        },
        {
          name: "og:url",
          content: url,
        },
        {
          name: "og:image",
          content: image,
        },
      ]}
    />
  );
};
