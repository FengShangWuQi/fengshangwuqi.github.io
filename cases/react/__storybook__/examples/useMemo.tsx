import React, { useMemo, useState } from "react";

import { useDesignSystem } from "src-core/ds";

export const UseMemoDemo = () => {
  const ds = useDesignSystem();

  const [count, setCount] = useState(1);

  const expensiveFn = () => {
    console.log(`expensive compute`);
    return "xx";
  };

  const memoizedValue = useMemo(expensiveFn, []);

  return (
    <div>
      <div>
        {count} - {memoizedValue}
      </div>

      <div>
        <button
          css={{
            marginTop: ds.spacing[2],
          }}
          onClick={() => {
            setCount(count => count + 1);
          }}>
          click
        </button>
      </div>
    </div>
  );
};
