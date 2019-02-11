import { CSSObject } from "@emotion/core";

import { directionalProperty } from ".";

export const padding = (...values: Array<string | number>): CSSObject => ({
  ...directionalProperty("padding", ...values),
});
