import React, { useState } from "react";

import { useDebounce } from "../";

export default () => {
  const [count, setCount] = useState(0);
  const debounceCount = useDebounce(count, 200);

  return (
    <div>
      <div>
        <div>count: {count}</div>
        <div>debounceCount: {debounceCount}</div>
      </div>

      <button
        css={{
          marginTop: 24,
        }}
        onClick={() => {
          setCount(count + 1);
        }}>
        click
      </button>

      {/* <EditLink path="src-core/react/useDebounce.ts" /> */}
    </div>
  );
};
