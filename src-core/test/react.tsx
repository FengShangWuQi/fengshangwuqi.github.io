import React from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

import { Bootstrap } from "src-core/react";
import { defaultTheme } from "src-core/ds";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <Bootstrap ds={defaultTheme}>{children}</Bootstrap>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">,
): RenderResult =>
  render(ui, { wrapper: AllTheProviders as React.ComponentType, ...options });

export * from "@testing-library/react";

export { customRender as render };
