import React, { useCallback, useState } from "react";

import { useDesignSystem } from "src-core/ds";

export const UseCallbackDemo = () => {
  const ds = useDesignSystem();

  const [count, setCount] = useState(1);

  const handleClick = () => {
    console.log("click");
  };

  const memoizedCallback = useCallback(handleClick, []);

  return (
    <div>
      {count}

      <div
        css={{
          marginTop: ds.spacing[2],
        }}>
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          click
        </button>

        <Child onClick={memoizedCallback} />
      </div>
    </div>
  );
};

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log("child render");
  return onClick && null;
});

Child.displayName = "UseCallbackChild";
