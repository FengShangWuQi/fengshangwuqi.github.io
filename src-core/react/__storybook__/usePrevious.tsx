import React, { useState } from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { usePrevious } from "..";

export default () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <div>
        Now: {count}, before: {prevCount}
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

      <EditLink path="src-core/react/usePrevious.ts" />
    </div>
  );
};
