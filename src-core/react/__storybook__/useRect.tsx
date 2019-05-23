import React, { useRef } from "react";

import { flex } from "src-core/style";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useRect } from "..";

export default () => {
  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div>
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
              marginTop: 20,
            }}>
            left: {rect.left}
          </div>
          <div>
            top: {rect.top}
            <div
              ref={ref}
              css={{ width: 300, height: 200, border: "1px solid #333" }}
              title={`${rect.width}, ${rect.height}`}
            />
            <div
              css={{
                textAlign: "center",
              }}>
              width: {rect.width}
            </div>
          </div>
        </div>
        height: {rect.height}
      </div>

      <EditLink path="src-core/react/useRect.ts" />
    </div>
  );
};
