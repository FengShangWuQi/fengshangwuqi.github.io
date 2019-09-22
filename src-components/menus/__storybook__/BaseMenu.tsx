import React from "react";

import { withoutBubble } from "src-core/react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { BaseMenu, BaseMenuItem, MenuMode } from "..";

export default () => (
  <div>
    <div>
      <h3>HORIZONTAL</h3>

      <BaseMenu
        css={{
          color: "#ffffff",
          background: "#009688",
          height: 60,
          lineHeight: "60px",
        }}>
        {["docs", "blog", "github"].map(item => (
          <BaseMenuItem key={item}>
            <a
              href="#"
              onClick={withoutBubble(() => {})}
              css={{
                color: "#ffffff",
              }}>
              {item.toUpperCase()}
            </a>
          </BaseMenuItem>
        ))}
      </BaseMenu>

      <h3>VERTICAL</h3>

      <BaseMenu
        css={{
          color: "#ffffff",
          background: "#009688",
        }}
        mode={MenuMode.VERTICAL}>
        {["docs", "blog", "github"].map(item => (
          <BaseMenuItem key={item}>
            <a
              href="#"
              onClick={withoutBubble(() => {})}
              css={{
                color: "#ffffff",
              }}>
              {item.toUpperCase()}
            </a>
          </BaseMenuItem>
        ))}
      </BaseMenu>
    </div>

    <EditLink path="src-components/menus/BaseMenu.tsx" />
  </div>
);
