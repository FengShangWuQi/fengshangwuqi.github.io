import React from "react";

export const FirstLetterDemo = () => {
  return (
    <div
      css={{
        "& p": {
          marginTop: 24,
          fontSize: 16,
          lineHeight: 1.625,

          "&:first-of-type::first-letter": {
            float: "left",
            paddingRight: 10,
            lineHeight: 1.1,
            fontSize: 48,
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

      {/* <EditLink path="cases/css/__storybook__/first-letter.tsx" /> */}
    </div>
  );
};
