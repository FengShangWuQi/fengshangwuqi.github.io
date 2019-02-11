import { CSSObject } from "@emotion/core";

export const size = (
  width: string | number,
  height?: string | number,
): CSSObject => ({
  width,
  height: height || width,
});
