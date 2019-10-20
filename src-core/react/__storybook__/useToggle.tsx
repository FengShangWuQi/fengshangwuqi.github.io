import React from "react";

import { useToggle } from "..";

export const ToggleDemo = () => {
  const [on, toggle] = useToggle();

  return (
    <div>
      <div>{on ? "on" : "off"}</div>

      <button
        css={{
          marginTop: 24,
        }}
        onClick={toggle}>
        click
      </button>
    </div>
  );
};
