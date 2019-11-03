import React from "react";

import { margin } from "src-core/style";

export const BoxDecorationBreakDemo = () => {
  return (
    <span
      css={{
        ...margin(0, "auto"),
        backgroundImage:
          "linear-gradient(135deg, deeppink, dodgerblue, yellowgreen)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        boxDecorationBreak: "clone",
      }}>
      The box-decoration-break CSS property specifies how an element fragments
      should be rendered when broken across multiple lines, columns, or pages.
      The box-decoration-break CSS property specifies how an element fragments
      should be rendered when broken across multiple lines, columns, or pages.
      The box-decoration-break CSS property specifies how an element fragments
      should be rendered when broken across multiple lines, columns, or pages.
    </span>

    // <EditLink path="cases/css/__storybook__/box-decoration-break.tsx" />
  );
};
