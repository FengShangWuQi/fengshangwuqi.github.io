import { CSSObject } from "@emotion/core";

export const flex = (flexOpts: CSSObject): CSSObject => ({
  display: "flex",
  ...flexOpts,
});

export const inlineFlex = (flexOpts: CSSObject): CSSObject => ({
  display: "inline-flex",
  ...flexOpts,
});
