import React from "react";

import { useLocalStorage } from "..";

export const UseLocalStorageDemo = () => {
  const key = "count";
  const [storedValue, setStoredValue] = useLocalStorage(key, 0);

  return (
    <div>
      <div>
        {key}: {storedValue}
      </div>

      <button
        css={{
          marginTop: 24,
        }}
        onClick={() => {
          setStoredValue((count: number) => count + 1);
        }}>
        click
      </button>
    </div>
  );
};
