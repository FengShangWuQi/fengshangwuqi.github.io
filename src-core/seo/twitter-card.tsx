import React from "react";
import { Helmet } from "react-helmet-async";

import { IBaseSEO } from "./seo";

export interface ITwitterCardProps extends IBaseSEO {
  creator: string;
}

export const TwitterCard = ({
  title,
  description,
  image,
  creator,
}: ITwitterCardProps) => {
  return (
    <Helmet
      meta={[
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: image,
        },
        {
          name: "twitter:creator",
          content: creator,
        },
      ]}
    />
  );
};
