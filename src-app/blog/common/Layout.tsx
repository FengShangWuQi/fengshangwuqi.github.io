import { React } from "src-core/react";

import { Footer } from "./Footer";

import "prismjs/themes/prism-tomorrow.css";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <header />
    {children}
    <Footer />
  </div>
);
