import React, { useState } from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useRequest } from "../";

export default () => {
  const [response, setResponse] = useState(null);

  const [request, requesting] = useRequest(
    {
      url: "https://api.github.com/users/FengShangWuQi",
    },
    {
      onSuccess: ({ data }) => {
        setResponse(data);
      },
    },
  );

  return (
    <div>
      <button
        css={{
          marginBottom: 24,
        }}
        onClick={request}>
        click
      </button>

      <div>
        {requesting && "loading..."}
        {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </div>

      <EditLink path="src-core/react/useRequest.ts" />
    </div>
  );
};
