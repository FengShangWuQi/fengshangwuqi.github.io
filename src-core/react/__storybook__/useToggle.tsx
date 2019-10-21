import React from "react";

import { useDesignSystem } from "src-core/ds";

import { useToggle } from "..";

export const ToggleDemo = () => {
  const ds = useDesignSystem();

  const [on, toggle] = useToggle();

  return (
    <div>
      <div>{on ? "on" : "off"}</div>

      <button
        css={{
          marginTop: ds.padding.l,
        }}
        onClick={toggle}>
        click
      </button>
    </div>
  );
};
