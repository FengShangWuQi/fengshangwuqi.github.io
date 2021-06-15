import React from "react";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { Button } from "src-components/basic/Button";

import { useToggle } from "../useToggle";

export const UseToggleDemo = () => {
  const ds = useDesignSystem();

  const [on, { toggle }] = useToggle(true);

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
        }),
      }}>
      <Button onClick={toggle}>click</Button>

      <div css={{ marginLeft: ds.spacing[2] }}>{on ? "on" : "off"}</div>
    </div>
  );
};
