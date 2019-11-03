import React, { useRef } from "react";

import { useRect } from "src-core/react";
import { position } from "src-core/style";

export const AttrDemo = () => {
  const ref = useRef(null);
  const { height, top, left } = useRect(ref);

  return (
    <div
      ref={ref}
      css={{
        display: "inline-block",
      }}>
      <span
        css={{
          cursor: "pointer",
          "&::before": {
            ...position("absolute"),
            left: left + 16,
            top: top - height,
            content: "attr(data-tip)",
            opacity: 0,
          },
          "&:hover::before": {
            opacity: 1,
          },
        }}
        data-tip="hello">
        Hover me!
      </span>
    </div>

    // <EditLink path="cases/css/__storybook__/attr.tsx" />
  );
};
