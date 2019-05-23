import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { withoutBubble } from "..";

export default () => {
  return (
    <div>
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

      <EditLink path="src-core/react/withoutBubble.ts" />
    </div>
  );
};
