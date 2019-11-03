import React from "react";

import { ellipsis } from "..";

export const EllipsisDemo = () => {
  return (
    <div>
      <pre>{`{
  ...ellipsis(),
}`}</pre>

      <div
        css={{
          ...ellipsis(),
          width: 80,
          marginTop: 24,
        }}>
        这是一个非常长的标题
      </div>

      {/* <EditLink path="src-core/style/ellipsis.ts" /> */}
    </div>
  );
};
