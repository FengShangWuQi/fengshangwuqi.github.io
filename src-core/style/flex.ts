import { CSSObject } from "@emotion/core";

export const flex = (flexOpts: CSSObject): CSSObject => ({
  display: "flex",
  ...flexOpts,
});
