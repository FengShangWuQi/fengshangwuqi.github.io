import React from "react";

import { withoutBubble } from "src-core/react";
import { useDesignSystem } from "src-core/ds";

import { Menu, MenuItem, MenuMode } from "../menus";

const MenuItems = () => {
  const ds = useDesignSystem();

  return (
    <>
      {["Navigation-One", "Navigation-Two", "Navigation-Three"].map(item => (
        <MenuItem key={item}>
          <a
            href="#"
            onClick={withoutBubble(() => {})}
            css={{
              color: ds.color.text,
            }}>
            {item.toUpperCase()}
          </a>
        </MenuItem>
      ))}
    </>
  );
};

export const HorizontalMenu = () => (
  <Menu
    css={{
      height: 60,
      lineHeight: "60px",
    }}>
    <MenuItems />
  </Menu>
);

export const RightMenu = () => (
  <Menu
    css={{
      height: 60,
      lineHeight: "60px",
    }}
    right>
    <MenuItems />
  </Menu>
);

export const VerticalMenu = () => (
  <Menu mode={MenuMode.VERTICAL}>
    <MenuItems />
  </Menu>
);
