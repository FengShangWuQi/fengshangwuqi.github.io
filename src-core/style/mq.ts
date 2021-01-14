import { CSSObject } from "@emotion/react";
import facepaint from "facepaint";

import { breakpoint, breakpointKey } from "src-core/ds";

export const mq = (breakpoints: breakpointKey[], style: CSSObject) => {
  const selectors = breakpoints.map(
    bp => `@media (min-width: ${breakpoint[bp]}px)`,
  );
  const mq = facepaint(selectors);

  const dynamicStyle = mq(style);

  return dynamicStyle;
};
