import React from "react";

import { useDesignSystem } from "src-core/ds";

export const FirstLetterDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        "& p": {
          marginTop: 24,
          fontSize: ds.size.base,
          lineHeight: 1.625,

          "&:first-of-type::first-letter": {
            float: "left",
            paddingRight: 10,
            lineHeight: 1.1,
            fontSize: ds.size.xxl,
            color: "#cd5c5c",
          },
        },
      }}>
      <p>
        The ::first-letter CSS pseudo-element applies styles to the first letter
        of the first line of a block-level element, but only when not preceded
        by other content (such as images or inline tables). The ::first-letter
        CSS pseudo-element applies styles to the first letter of the first line
        of a block-level element, but only when not preceded by other content
        (such as images or inline tables).
      </p>

      <p>
        The ::first-letter CSS pseudo-element applies styles to the first letter
        of the first line of a block-level element, but only when not preceded
        by other content (such as images or inline tables).
      </p>
    </div>
  );
};
