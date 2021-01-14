import { CSSObject } from "@emotion/react";

export const grid = (gridOpts: CSSObject): CSSObject => ({
  display: "grid",
  ...gridOpts,
});
