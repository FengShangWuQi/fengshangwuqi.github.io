import React, { useRef } from "react";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { useRect } from "..";

export const UseRectDemo = () => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
        }),
      }}>
      <div
        css={{
          ...flex({}),
        }}>
        <div
          css={{
            marginTop: 16,
          }}>
          left: {rect.left}
        </div>
        <div>
          <div>top: {rect.top}</div>

          <div
            ref={ref}
            css={{
              width: 300,
              height: 200,
              border: `1px solid ${ds.color.text}`,
            }}
          />

          <div
            css={{
              textAlign: "center",
            }}>
            width: {rect.width}
          </div>
        </div>
      </div>

      <div>height: {rect.height}</div>
    </div>
  );
};
