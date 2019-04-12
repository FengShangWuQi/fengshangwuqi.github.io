import React, { useRef } from "react";

import { useRect } from "src-core/react";
import { size } from "src-core/style";

import { Stars } from "..";

export default () => {
  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={{
        ...size("100%", 400),
        background: "#171a19",
      }}>
      <Stars width={rect.width} height={rect.height} />
    </div>
  );
};
