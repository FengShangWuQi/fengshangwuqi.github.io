import React, { useEffect } from "react";
import { rgba } from "polished";

import { useToglleTheme } from "src-core/ds";
import { useToggle } from "src-core/react";
import { flex } from "src-core/style";

import { storybookTheme } from "src-app/storybook/common/Layout";

import { Switch } from "../Switch";

export const BaseSwitch = () => (
  <Switch
    css={{
      marginLeft: 3,
    }}
  />
);

export const SwitchWithIcon = () => {
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
    <Switch
      css={{
        marginLeft: 3,
        background: "#0f1114",
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
  );
};

export const SwitchWithLabel = () => (
  <div
    css={{
      ...flex({
        alignItems: "center",
      }),
    }}>
    <Switch id="toggleWithLabel" css={{ marginLeft: 3, marginRight: 5 }} />
    <label
      htmlFor="toggleWithLabel"
      css={{
        cursor: "pointer",
      }}>
      label
    </label>
  </div>
);

export const DisabledSwitch = () => (
  <Switch
    css={{
      marginLeft: 3,
    }}
    defaultChecked={true}
    disabled
  />
);
