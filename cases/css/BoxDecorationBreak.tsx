import React from "react";

export const BoxDecorationBreakDemo = () => (
  <div
    css={{
      backgroundImage:
        "linear-gradient(135deg, deeppink, dodgerblue, yellowgreen)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      boxDecorationBreak: "clone",
    }}>
    The box-decoration-break CSS property specifies how an element fragments
    should be rendered when broken across multiple lines, columns, or pages. The
    box-decoration-break CSS property specifies how an element fragments should
    be rendered when broken across multiple lines, columns, or pages. The
    box-decoration-break CSS property specifies how an element fragments should
    be rendered when broken across multiple lines, columns, or pages.
  </div>
);
