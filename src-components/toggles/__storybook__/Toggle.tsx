import React from "react";

import { useToglleTheme } from "src-core/ds";

import { EditLink } from "src-app/storybook/common/Storybook";

import { Toggle } from "..";

export default () => {
  const { theme, toggleTheme } = useToglleTheme();

  return (
    <div>
      <Toggle
        css={{
          marginLeft: 3,
        }}
        defaultChecked={theme === "dark"}
        icons={{
          checked: (
            <img src={require("../images/moon.png")} width="16" height="16" />
          ),
          unchecked: (
            <img src={require("../images/sun.png")} width="16" height="16" />
          ),
        }}
        onChange={toggleTheme}
      />

      <EditLink path="src-components/toggles/Toggle.tsx" />
    </div>
  );
};
