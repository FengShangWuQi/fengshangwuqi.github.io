import React from "react";

import { withoutBubble } from "src-core/react";
import { useDesignSystem } from "src-core/ds";

import { BaseMenu, BaseMenuItem, MenuMode } from "..";

export const BaseMenuDemo = () => {
  const ds = useDesignSystem();

  return (
    <div>
      <h3>HORIZONTAL</h3>

      <BaseMenu
        css={{
          color: ds.color.text,
          height: 60,
          lineHeight: "60px",
        }}>
        {["docs", "blog", "github"].map(item => (
          <BaseMenuItem key={item}>
            <a
              href="#"
              onClick={withoutBubble(() => {})}
              css={{
                color: ds.color.text,
              }}>
              {item.toUpperCase()}
            </a>
          </BaseMenuItem>
        ))}
      </BaseMenu>

      <h3>VERTICAL</h3>

      <BaseMenu
        css={{
          color: ds.color.text,
        }}
        mode={MenuMode.VERTICAL}>
        {["docs", "blog", "github"].map(item => (
          <BaseMenuItem key={item}>
            <a
              href="#"
              onClick={withoutBubble(() => {})}
              css={{
                color: ds.color.text,
              }}>
              {item.toUpperCase()}
            </a>
          </BaseMenuItem>
        ))}
      </BaseMenu>
    </div>

    // <EditLink path="src-components/menus/BaseMenu.tsx" />
  );
};
