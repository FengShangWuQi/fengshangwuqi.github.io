import React from "react";
import { Link } from "gatsby";

import { BaseMenu, BaseMenuItem } from "src-components/menus";

export const Nav = () => (
  <BaseMenu right>
    {[{ value: "", label: "最新" }, { value: "archive", label: "归档" }].map(
      item => (
        <BaseMenuItem key={item.value}>
          <Link to={item.value}>{item.label.toUpperCase()}</Link>
        </BaseMenuItem>
      ),
    )}
  </BaseMenu>
);
