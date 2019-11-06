import React from "react";

import { flex } from "../flex";

export const FlexDemo = () => (
  <div
    css={{
      ...flex({
        justifyContent: "center",
        alignItems: "center",
      }),
      marginTop: 24,
      width: 620,
      height: 320,
      fontSize: 24,
      color: "white",
      background: "#ff8c00",
      borderRadius: 8,
      border: "1px solid #eee",
    }}>
    CSS FlexBox
  </div>
);
