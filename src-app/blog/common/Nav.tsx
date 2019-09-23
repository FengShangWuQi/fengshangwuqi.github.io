import React from "react";
import { Link } from "gatsby";

import { rhythm } from "src-core/style";

import { BaseMenu, BaseMenuItem } from "src-components/menus";
import { Toggle } from "src-components/toggles";

export const Nav = () => (
  <>
    <Toggle
      css={{
        float: "right",
        marginTop: 28,
        marginLeft: rhythm(3 / 4),
      }}
      icons={{
        checked: (
          <img
            src={require("src-components/toggles/images/moon.png")}
            width="16"
            height="16"
          />
        ),
        unchecked: (
          <img
            src={require("src-components/toggles/images/sun.png")}
            width="16"
            height="16"
          />
        ),
      }}
    />
    <BaseMenu right>
      {[{ value: "", label: "最新" }, { value: "archive", label: "归档" }].map(
        item => (
          <BaseMenuItem key={item.value}>
            <Link to={item.value}>{item.label.toUpperCase()}</Link>
          </BaseMenuItem>
        ),
      )}
    </BaseMenu>
  </>
);
