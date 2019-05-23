import React, { useRef } from "react";

import { useRect } from "src-core/react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useWhyDidYouUpdate } from "..";

export default () => {
  const ref = useRef(null);
  const rect = useRect(ref);

  useWhyDidYouUpdate("rect", rect);

  return (
    <div>
      <div
        ref={ref}
        css={{
          width: "100%",
          height: 250,
          border: "1px solid #333",
        }}
      />

      <EditLink path="src-core/react/useWhyDidYouUpdate.ts" />
    </div>
  );
};
