import React from "react";

import { grid } from "../../grid";

export const GridDemo = () => (
  <div
    css={{
      ...grid({
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gridAutoFlow: "row dense",
        gridGap: "20px 20px",
      }),
      marginTop: 24,
      width: 800,
      height: 360,
      fontSize: 24,
      color: "white",
      "& div": {
        padding: 15,
      },
    }}>
    <div
      css={{
        background: "#b71c1c",
        gridColumn: "1 / 3",
        gridRow: "1 / 3",
      }}>
      1
    </div>
    <div
      css={{
        background: "#009688",
      }}>
      2
    </div>
    <div
      css={{
        background: "#4caf50",
      }}>
      3
    </div>
    <div
      css={{
        background: "#9c27b0",
        gridColumnStart: 3,
        gridRow: "2 / 4",
      }}>
      4
    </div>
    <div
      css={{
        background: "#ff9800",
      }}>
      5
    </div>
  </div>
);
