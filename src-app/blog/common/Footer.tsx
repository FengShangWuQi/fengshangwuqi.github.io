import React from "react";
import { clearFix } from "polished";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        ...clearFix(),
        margin: "1em",
      }}>
      {children}
    </div>
  );
};
