import React from "react";

import { useDesignSystem } from "src-core/ds";

import { mq } from "../mq";

export const MqDemo = () => {
  const ds = useDesignSystem();

  return (
    <p
      css={mq(["lg"], {
        color: [ds.color.secondary, ds.color.text],
      })}>
      Media Queries.
    </p>
  );
};
