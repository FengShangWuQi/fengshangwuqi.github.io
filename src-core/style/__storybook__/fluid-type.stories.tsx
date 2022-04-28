import React from "react";

import { fluidType } from "../fluid-type";

export const FluidTypeDemo = () => (
  <p
    css={{
      ...fluidType("md", "xl", 12, 16),
    }}>
    Fluid type is cool.
  </p>
);
