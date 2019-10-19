import React from "react";

import { withoutBubble } from "..";

export default () => {
  return (
    <div
      onClick={() => {
        console.log("Bubble");
      }}>
      <a
        href="#!"
        onClick={withoutBubble(() => {
          console.log("withoutBubble");
        })}>
        Link
      </a>
    </div>

    // <EditLink path="src-core/react/withoutBubble.ts" />
  );
};
