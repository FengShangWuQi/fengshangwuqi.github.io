import React from "react";

import { useDesignSystem } from "src-core/ds";

import { useLocalStorage } from "../useLocalStorage";

export const UseLocalStorageDemo = () => {
  const ds = useDesignSystem();

  const key = "count";
  const [storedValue, setStoredValue] = useLocalStorage<number>(key);

  return (
    <div>
      <div>
        {key}: {storedValue}
      </div>

      <button
        css={{
          marginTop: ds.spacing[2],
        }}
        onClick={() => {
          setStoredValue((count = 0) => count + 1);
        }}>
        click
      </button>
    </div>
  );
};
