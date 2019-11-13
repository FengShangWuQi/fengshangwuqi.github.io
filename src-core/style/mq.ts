import { CSSObject } from "@emotion/core";
import facepaint from "facepaint";

import { breakpoint } from "src-core/ds";

type breakpointAlias = keyof typeof breakpoint;

export const mq = (breakpoints: breakpointAlias[], style: CSSObject) => {
  const selectors = breakpoints.map(
    bp => `@media (min-width: ${breakpoint[bp]}px)`,
  );
  const mq = facepaint(selectors);

  const dynamicStyle = mq(style);

  return dynamicStyle;
};
