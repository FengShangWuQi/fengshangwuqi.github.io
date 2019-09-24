import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useLocalStorage } from "..";

export default () => {
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

      <EditLink path="src-core/react/useLocalStorage.ts" />
    </div>
  );
};
