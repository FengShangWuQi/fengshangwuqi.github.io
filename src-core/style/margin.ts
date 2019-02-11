import { CSSObject } from "@emotion/core";

import { directionalProperty } from ".";

export const margin = (...values: Array<string | number>): CSSObject => ({
  ...directionalProperty("margin", ...values),
});
