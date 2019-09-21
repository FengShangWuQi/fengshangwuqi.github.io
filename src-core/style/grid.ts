import { CSSObject } from "@emotion/core";

export const grid = (gridOpts: CSSObject): CSSObject => ({
  display: "grid",
  ...gridOpts,
});
