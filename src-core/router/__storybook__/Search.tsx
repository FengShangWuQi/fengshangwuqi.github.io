import React from "react";

import { useSearch } from "..";

export const SearchDemo = () => {
  const { query, setQuery } = useSearch();

  return (
    <div>
      <pre>{JSON.stringify(query, null, 2)}</pre>

      <div
        css={{
          marginTop: 24,
        }}>
        <button
          css={{
            marginRight: 8,
          }}
          onClick={() => {
            setQuery({ a: [1, 2], b: 2 });
          }}>
          add query
        </button>
        <button
          onClick={() => {
            setQuery({});
          }}>
          clear query
        </button>
      </div>

      {/* <EditLink path="src-core/router/Route.tsx" /> */}
    </div>
  );
};
