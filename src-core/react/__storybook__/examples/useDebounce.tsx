import React, { useState } from "react";

import { useDesignSystem } from "src-core/ds";

import { useDebounce } from "../../useDebounce";

export const UseDebounceDemo = () => {
  const ds = useDesignSystem();

  const [count, setCount] = useState(0);
  const debounceCount = useDebounce(count, 200);

  return (
    <div>
      <div>
        count: {count}, debounceCount: {debounceCount}
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
