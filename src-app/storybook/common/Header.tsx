import React from "react";
import { Link } from "gatsby";

import { useDesignSystem } from "src-core/ds";

import { flex, margin, padding } from "src-core/style";

import { BaseMenu, BaseMenuItem } from "src-components/menus";

export const Header = ({ groups }: { groups: string[] }) => {
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
            {groups.map(group => (
              <BaseMenuItem key={group}>
                <Link to={group}>{group.toUpperCase()}</Link>
              </BaseMenuItem>
            ))}
          </BaseMenu>
        </div>
      </div>
    </div>
  );
};
