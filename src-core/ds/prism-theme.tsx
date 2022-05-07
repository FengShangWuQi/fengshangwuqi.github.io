import React from "react";
import { Global } from "@emotion/react";
import { margin, padding } from "polished";

import { useDesignSystem } from "src-core/ds";

export const PrismTheme = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        ".gatsby-highlight": {
          ...margin(25),
          ...padding(25),
          borderRadius: ds.radius.lg,
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
          color: "#fff",
        },
        ".gatsby-highlight-code-line": {
          ...margin(0, -25),
          ...padding("0.125rem", 25),
          display: "block",
          background: "#2e3440",
        },
        ".token.comment": {
          color: "#6272a4",
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
          color: "#fff",
        },
        [`a.vglnk,
        .token.url,
        .token.attr-value,
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
