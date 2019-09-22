import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { Toggle } from "..";

export default () => {
  return (
    <div>
      <Toggle
        defaultChecked={true}
        icons={{
          checked: (
            <img src={require("./images/moon.png")} width="16" height="16" />
          ),
          unchecked: (
            <img src={require("./images/sun.png")} width="16" height="16" />
          ),
        }}
      />

      <EditLink path="src-components/toggles/Toggle.tsx" />
    </div>
  );
};
