import React from "react";
import { border, lighten } from "polished";

import { pickElmAttrs } from "src-core/react";

const Block = ({ ...otherProps }) => (
  <div
    {...pickElmAttrs(otherProps)}
    css={{
      width: 160,
      height: 160,
    }}></div>
);

export const PieChart = () => (
  <Block
    css={{
      borderRadius: "50%",
      background:
        "conic-gradient(from -40deg, #0088FE 0% 40%, #00C49F 40% 50%, #FFBB28 50% 70%, #FF8042 70% 100%)",
    }}
  />
);

export const Checkerboard = () => (
  <Block
    css={{
      ...border(1, "solid"),
      background:
        "conic-gradient(white 25%, black 0 50%, white 0 75%, black 0)",
      backgroundSize: "32px 32px",
    }}
  />
);

export const Starburst = () => (
  <Block
    css={{
      borderRadius: "50%",
      background: `repeating-conic-gradient(#0ac 0 15deg, ${lighten(
        0.25,
        "#0ac",
      )} 0 30deg)`,
    }}
  />
);
