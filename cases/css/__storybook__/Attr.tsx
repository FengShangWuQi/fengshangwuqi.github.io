import React, { useRef } from "react";

import { useRect } from "src-core/react";
import { position } from "src-core/style";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  const ref = useRef(null);
  const { height, top, left } = useRect(ref);

  return (
    <div>
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

      <EditLink path="cases/css/__storybook__/Attr.tsx" />
    </div>
  );
};
