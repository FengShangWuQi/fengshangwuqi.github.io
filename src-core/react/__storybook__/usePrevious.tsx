import React, { useState } from "react";

import { useDesignSystem } from "src-core/ds";

import { usePrevious } from "..";

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
          marginTop: ds.padding.l,
        }}
        onClick={() => {
          setCount(count + 1);
        }}>
        click
      </button>
    </div>
  );
};
