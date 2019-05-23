import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { border } from "..";

export default () => {
  return (
    <div>
      <pre>{`{
  ...border("bottom", 1, "solid", "#eee")
}`}</pre>

      <div
        css={{
          ...border("bottom", 1, "solid", "#eee"),
          marginTop: 24,
        }}
      />

      <EditLink path="src-core/style/border.ts" />
    </div>
  );
};
