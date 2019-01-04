import * as React from "react";

import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <header />
    {children}
    <Footer />
  </div>
);
