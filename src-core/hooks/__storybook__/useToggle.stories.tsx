import React from "react";

import { useDesignSystem } from "src-core/ds";

import { useToggle } from "../useToggle";

export const ToggleDemo = () => {
  const ds = useDesignSystem();

  const [on, toggle] = useToggle();

  return (
    <div>
      <div>{on ? "on" : "off"}</div>

      <button
        css={{
          marginTop: ds.spacing[2],
        }}
        onClick={toggle}>
        click
      </button>
    </div>
  );
};
