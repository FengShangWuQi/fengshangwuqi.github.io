import React from "react";
import { Link } from "gatsby";

import { useDesignSystem } from "src-core/ds";
import { mq, flex } from "src-core/style";

import { Menu, MenuItem } from "src-components/navigation/Menu";
import { Button } from "src-components/basic/Button";

import { pickElmAttrs } from "utils/pickElmAttrs";

import { APP_META, APP_ROUTES } from "../constants";
import { Search } from "../search";

export const Nav = ({ pathname, ...props }: { pathname: string }) => {
  const ds = useDesignSystem();

  const isMetaTitleVisible = ["archive", "404"].some(
    path => /^\/\w+\/?$/.test(pathname) && pathname.includes(path),
  );

  return (
    <div
      css={{
        ...flex({
          justifyContent: "space-between",
          alignItems: "center",
        }),
      }}>
      <Menu
        css={mq(["sm"], {
          height: [60, 80],
        })}
        {...pickElmAttrs(props)}>
        <MenuItem>
          <Link
            to="/"
            css={mq(["lg"], {
              display: isMetaTitleVisible ? "block" : "none",
              fontSize: [ds.size["2xl"], ds.size["3xl"]],
            })}>
            {APP_META.TITLE}
          </Link>
        </MenuItem>
      </Menu>

      <Menu
        css={mq(["sm"], {
          display: [isMetaTitleVisible ? "none" : "block", "block"],
          height: [60, 80],
        })}
        {...pickElmAttrs(props)}>
        {process.env.GATSBY_ALGOLIA_APP_ID && (
          <MenuItem
            key="search"
            css={mq(["lg"], {
              display: ["none", "flex"],
            })}>
            <Search indices={[{ name: "blog" }]} />
          </MenuItem>
        )}

        {APP_ROUTES.map(item => (
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

        <MenuItem key="subscribe">
          <a
            href="https://github.com/FengShangWuQi/fengshangwuqi.github.io/releases"
            target="_blank"
            rel="noopener noreferrer">
            <Button primary>订阅</Button>
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
};
