import React from "react";

import { useDesignSystem } from "src-core/ds";

import { useLocalStorage } from "../../useLocalStorage";

export const UseLocalStorageDemo = () => {
  const ds = useDesignSystem();

  const key = "count";
  const [storedValue, setStoredValue] = useLocalStorage(key, 0);

  return (
    <div>
      <div>
        {key}: {storedValue}
      </div>

      <button
        css={{
          marginTop: ds.padding.l,
        }}
        onClick={() => {
          setStoredValue((count: number) => count + 1);
        }}>
        click
      </button>
    </div>
  );
};
