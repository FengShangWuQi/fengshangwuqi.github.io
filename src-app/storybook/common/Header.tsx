import React from "react";
import { Link } from "gatsby";
import { margin } from "polished";

import { useDesignSystem } from "src-core/ds";

import { flex, padding } from "src-core/style";

import { Menu, MenuItem } from "src-components/navigation/Menu";

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
          <Menu
            css={{
              height: 50,
              lineHeight: "50px",
            }}>
            {groups.map(group => (
              <MenuItem key={group}>
                <Link to={group}>{group.toUpperCase()}</Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};
