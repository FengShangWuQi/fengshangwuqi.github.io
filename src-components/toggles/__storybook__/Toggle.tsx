import React, { useEffect } from "react";
import { rgba } from "polished";

import { useToglleTheme } from "src-core/ds";
import { useToggle } from "src-core/react";

import { storybookTheme } from "src-app//storybook/common/Layout";
import { EditLink } from "src-app/storybook/common/Storybook";

import { Toggle } from "..";

export default () => {
  const { toggleTheme } = useToglleTheme();
  const [on, toggle] = useToggle(false);

  useEffect(() => {
    toggleTheme(on ? otherTheme : originTheme);
  }, [on]);

  const originTheme = {
    color: {
      ...storybookTheme.color,
    },
  };
  const otherTheme = {
    color: {
      primary: "#a7154e",
      secondary: rgba("#a7154e", 0.85),
      text: "#d0ccc5",
      textLight: rgba("#d0ccc5", 0.85),
      bg: "#181a1b",
    },
  };

  return (
    <div>
      <Toggle
        css={{
          marginLeft: 3,
        }}
        defaultChecked={on}
        icons={{
          checked: (
            <img src={require("../images/moon.png")} width="16" height="16" />
          ),
          unchecked: (
            <img src={require("../images/sun.png")} width="16" height="16" />
          ),
        }}
        onChange={toggle}
      />

      <EditLink path="src-components/toggles/Toggle.tsx" />
    </div>
  );
};
