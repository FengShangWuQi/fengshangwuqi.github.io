import React from "react";
import { Link } from "gatsby";

import { Menu, MenuItem } from "src-components/navigation/Menu";

import { pickElmAttrs } from "utils/pickElmAttrs";

export const Nav = ({ ...props }) => (
  <Menu right {...pickElmAttrs(props)}>
    {[
      { value: "/rss.xml", label: "rss" },
      { value: "/", label: "最新" },
      { value: "/archive", label: "归档" },
    ].map(item => (
      <MenuItem key={item.value}>
        {item.label === "rss" ? (
          <a href={item.value} target="_blank" rel="noopener noreferrer">
            {item.label.toUpperCase()}
          </a>
        ) : (
          <Link to={item.value}>{item.label.toUpperCase()}</Link>
        )}
      </MenuItem>
    ))}
  </Menu>
);
