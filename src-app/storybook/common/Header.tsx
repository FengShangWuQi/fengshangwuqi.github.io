import React from "react";

import { useRedirect, Link } from "src-core/router";
import { useDesignSystem } from "src-core/ds";

import { flex, margin } from "src-core/style";

import { BaseMenu, BaseMenuItem } from "src-components/menus";

import { groupModuleCompList } from "../templates";

export const Header = () => {
  const ds = useDesignSystem();

  useRedirect("/components", "/components/tags/Tag");

  return (
    <div
      css={{
        height: 50,
        lineHeight: "50px",
        color: ds.color.bg,
        background: ds.color.primary,
        overflow: "hidden",
        "& a": {
          color: ds.color.bg,
        },
      }}>
      <div
        css={{
          ...margin(0, "auto"),
          width: 1200,
        }}>
        <div
          css={{
            ...flex({
              justifyContent: "space-between",
            }),
          }}>
          <Link to="/">枫上雾棋的 storybook</Link>
          <BaseMenu
            css={{
              height: 50,
              lineHeight: "50px",
            }}>
            {Object.keys(groupModuleCompList).map(groupName => (
              <BaseMenuItem>
                <Link key={groupName} to={`/${groupName}`}>
                  {groupName.toUpperCase()}
                </Link>
              </BaseMenuItem>
            ))}
          </BaseMenu>
        </div>
      </div>
    </div>
  );
};
