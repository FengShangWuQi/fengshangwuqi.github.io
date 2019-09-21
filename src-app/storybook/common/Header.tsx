import React from "react";

import { Link } from "src-core/router";
import { useDesignSystem } from "src-core/ds";

import { flex, margin, padding } from "src-core/style";

import { BaseMenu, BaseMenuItem } from "src-components/menus";

import { groupModuleCompList } from "../templates";

export const Header = () => {
  const ds = useDesignSystem();

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
          ...padding(0, 24),
          maxWidth: 1200,
        }}>
        <div
          css={{
            ...flex({
              justifyContent: "space-between",
            }),
          }}>
          <Link
            css={{
              minWidth: 220,
            }}
            to="/">
            枫上雾棋的 storybook
          </Link>
          <BaseMenu
            css={{
              height: 50,
              lineHeight: "50px",
            }}>
            {Object.keys(groupModuleCompList).map(groupName => (
              <BaseMenuItem key={groupName}>
                <Link to={`/${groupName}`}>{groupName.toUpperCase()}</Link>
              </BaseMenuItem>
            ))}
          </BaseMenu>
        </div>
      </div>
    </div>
  );
};
