import React, { useState, useEffect, StrictMode } from "react";
import { merge } from "lodash";
import figlet from "figlet";

import {
  ThemeProvider,
  DSReset,
  ITheme,
  ToggleThemeProvider,
} from "src-core/ds";

figlet.parseFont(
  "Script",
  require("figlet/importable-fonts/Script.js").default,
);

export const Bootstrap = ({
  ds,
  children,
}: {
  ds: ITheme;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(ds);

  useEffect(() => {
    figlet.text(process.env.__APP__ as string, "Script", function (_, data) {
      console.log(data, "\n", `by ${process.env.__AUTHOR__}`);
    });
  }, []);

  return (
    <StrictMode>
      <ToggleThemeProvider
        value={{
          toggleTheme: adjustedTheme =>
            setTheme(merge(theme, adjustedTheme) as ITheme),
        }}>
        <ThemeProvider theme={theme}>
          <DSReset />
          {children}
        </ThemeProvider>
      </ToggleThemeProvider>
    </StrictMode>
  );
};
