import { CSSObject } from "@emotion/react";

export const userSelect = (
  value: "auto" | "text" | "none" | "contain" | "all",
): CSSObject => ({
  MozUserSelect: value,
  WebkitUserSelect: value,
  MsUserSelect: value,
  UserSelect: value,
});
