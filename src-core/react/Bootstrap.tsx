import React, { StrictMode } from "react";

import { ThemeProvider, DSReset, ITheme } from "src-core/ds";
import { Location } from "src-core/router";

export const Bootstrap = ({
  ds,
  children,
}: {
  ds: ITheme;
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
