import React, { useState, useRef } from "react";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { Button } from "src-components/basic/button";

import { useClickOutside } from "../useClickOutside";

export const UseClickOutsideDemo = () => {
  const ds = useDesignSystem();
  const ref = useRef(null);

  const [val, setVal] = useState("");

  const handleClickOutside = () => {
    setVal("click-out-side");
  };

  const handleClickInside = () => {
    setVal("click-in-side");
  };

  useClickOutside(ref, handleClickOutside);

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
        }),
      }}>
      <Button ref={ref} onClick={handleClickInside}>
        click
      </Button>

      <div css={{ marginLeft: ds.spacing[2] }}>{val}</div>
    </div>
  );
};
