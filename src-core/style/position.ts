import { CSSObject } from "@emotion/core";
import { PositionProperty } from "csstype";

import { directionalProperty } from ".";

export const position = (
  position: PositionProperty,
  ...values: Array<string | number>
): CSSObject => ({
  position,
  ...directionalProperty("", ...values),
});
