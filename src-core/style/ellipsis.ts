import { CSSObject } from "@emotion/core";

export const ellipsis = (width?: number | string): CSSObject => ({
  display: "inline-block",
  width: width || "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
