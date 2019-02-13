import React from "react";
import { Global } from "@emotion/core";

import { useDesignSystem } from "src-core/ds";
import { margin, padding } from "src-core/style";

export const PrismTheme = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        ".gatsby-highlight": {
          ...margin(25),
          ...padding(0, 15),
          borderRadius: ds.radius.l,
          background: "#282c34",
          color: ds.color.bg,
          overflow: "auto",
        },
        [`.gatsby-highlight > code[class*="language-"],
          .gatsby-highlight > pre[class*="language-"],
          .gatsby-highlight > pre.prism-code`]: {
          ...margin(25),
          fontSize: ds.size.s,
          lineHeight: "20px",
        },
        ".gatsby-highlight-code-line": {
          ...margin("-0.125rem", "calc(-1rem - 23px)"),
          ...padding("0.125rem", "calc(1rem + 15px)"),
          display: "block",
          backgroundColor: "#353b45",
        },
        [`.token.attr-name,
          .token.attr-name`]: {
          color: "#c5a5c5",
        },
        [`.token.comment,
          .token.block-comment,
          .token.prolog,
          .token.doctype,
          .token.cdata`]: {
          color: "#B2B2B2",
        },
        [`.token.property,
          .token.number,
          .token.function-name,
          .token.constant,
          .token.symbol,
          .token.deleted`]: {
          color: "#5a9bcf",
        },
        ".token.boolean": {
          color: "#ff8b50",
        },
        ".token.tag": {
          color: "#fc929e",
        },
        [`.token.string,
        .token.string a,
          .token.class-name`]: {
          color: "#8dc891",
        },
        ".token.punctuation": {
          color: "#88C6BE",
        },
        [`.token.selector,
            .token.char,
            .token.builtin,
            .token.inserted`]: {
          color: "#D8DEE9",
        },
        ".token.function": {
          color: "#79b6f2",
        },
        [`.token.operator,
          .token.entity,
          .token.url,
          .token.variable`]: {
          color: "#d7deea",
        },
        [`.token.atrule,
          .token.class-name`]: {
          color: "#FAC863",
        },
        ".token.important": {
          fontWeight: 400,
        },
        ".namespace": {
          opacity: 0.7,
        },
      }}
    />
  );
};
