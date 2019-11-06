import React from "react";

import { withoutBubble } from "../../withoutBubble";

export const WithoutBubbleDemo = () => {
  return (
    <a
      href="#!"
      onClick={withoutBubble(() => {
        console.log("withoutBubble");
      })}>
      Link
    </a>
  );
};
