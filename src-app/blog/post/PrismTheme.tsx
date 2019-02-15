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
          ...padding(25),
          borderRadius: ds.radius.m,
          background: "#282a36",
          overflow: "scroll",
        },
        [`.gatsby-highlight pre[class*="language-"],
          .gatsby-highlight code[class*="language-"]`]: {
          ...margin(0),
          lineHeight: 1.45,
          fontFamily: `SFMono-Regular,
            Consolas,
            Liberation Mono,
            Menlo,
            Courier,
            monospace`,
          fontSize: 0.85,
          color: ds.color.bg,
        },
        ".gatsby-highlight-code-line": {
          ...margin(0, -25),
          ...padding("0.125rem", 0),
          display: "block",
          background: "#2e3440",
        },
        ".token.comment": {
          color: "#6272a4",
        },
        ".token.url": {
          color: "#f1fa8c",
        },
        [`.token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted`]: {
          color: "#bd93f9",
        },
        [`.token.class-name,
          .token.attr-name,
          .token.rule,
          .token.selector`]: {
          color: "#50fa7b",
        },
        [`.token.function,
          .token.property,
          .token.operator`]: {
          color: "#66d9ef",
        },
        ".token.punctuation": {
          color: ds.color.bg,
        },
        [`.token.attr-value,
          .token.string,
          .token.string a,
          .token.char,
          .token.builtin,
          .token.inserted,
          .token.entity`]: {
          color: "#f1fa8c",
        },
        [`.token.regex,
          .token.keyword,
          .token.tag,
          .token.important,
          .token.variable`]: {
          color: "#ff79c6",
        },
        [`.token.important,
        .token.bold`]: {
          fontWeight: "bold",
        },
        ".token.italic": {
          fontStyle: "italic",
        },
        ".token.entity": {
          cursor: "help",
        },
        ".namespace": {
          opacity: 0.7,
        },
      }}
    />
  );
};
