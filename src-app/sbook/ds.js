import React from "react";

import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

export default storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <DSReset />
    {storyFn()}
  </ThemeProvider>
);
