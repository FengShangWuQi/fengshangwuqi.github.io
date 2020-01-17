import React, { useState } from "react";

import { useDesignSystem } from "src-core/ds";

import { usePrevious } from "../usePrevious";

export const UsePreviousDemo = () => {
  const ds = useDesignSystem();

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <div>
        Now: {count}, before: {prevCount}
      </div>

      <button
        css={{
          marginTop: ds.spacing[2],
        }}
        onClick={() => {
          setCount(count + 1);
        }}>
        click
      </button>
    </div>
  );
};
