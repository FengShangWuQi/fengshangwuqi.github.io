import React from "react";
import { padding } from "src-core/style";

export const Footer = () => (
  <footer
    css={{
      ...padding(30, 0, 20),
      textAlign: "right",
    }}>
    © 2019
  </footer>
);
