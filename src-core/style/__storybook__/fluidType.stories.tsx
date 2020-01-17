import React from "react";

import { fluidType } from "../fluidType";

export const FluidTypeDemo = () => (
  <p
    css={{
      ...fluidType("md", "xl", 12, 16),
    }}>
    Fluid type is cool.
  </p>
);
