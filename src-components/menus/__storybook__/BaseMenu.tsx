import React from "react";

import { BaseMenu, BaseMenuItem, MenuMode } from "..";

export default () => (
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
        <BaseMenuItem>
          <a
            href="#"
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
        <BaseMenuItem>
          <a
            href="#"
            css={{
              color: "#ffffff",
            }}>
            {item.toUpperCase()}
          </a>
        </BaseMenuItem>
      ))}
    </BaseMenu>
  </div>
);
