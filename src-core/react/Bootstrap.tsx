import React, { StrictMode } from "react";

import { Location } from "src-core/router";
import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

export const Bootstrap = ({
  ds = defaultTheme,
  children,
}: {
  ds: typeof defaultTheme;
  children: React.ReactNode;
}) => {
  return (
    <StrictMode>
      <Location>
        <ThemeProvider theme={ds}>
          <DSReset />
          {children}
        </ThemeProvider>
      </Location>
    </StrictMode>
  );
};
