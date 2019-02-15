import React from "react";

import { padding } from "src-core/style";

import { rhythm } from "./typography";

export const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    css={{
      ...padding(0, 25, rhythm(5 / 2)),
      boxShadow: "inset 0 0 30px #eee",
      overflow: "hidden",
    }}>
    {children}
  </div>
);
