import React, { useRef } from "react";

import { useDesignSystem } from "src-core/ds";
import { useRect } from "src-core/hooks";

import { Barrage } from "./Barrage";
import { Stars } from "./Stars";

export const StarsDemo = () => {
  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={{
        width: "100%",
        height: 300,
        background: "#171a19",
      }}>
      <Stars width={rect.width} height={rect.height} />
    </div>
  );
};

export const BarrageDemo = () => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  const data = Array.from({ length: 30 }, (_, i) => `${String(i).repeat(3)}`);

  return (
    <div
      ref={ref}
      css={{
        width: "100%",
        height: 300,
        background: ds.colorPalette.gray[800],
      }}>
      <Barrage width={rect.width} height={rect.height} data={data} />
    </div>
  );
};
