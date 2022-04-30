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

  const isArchiveOrNotFound = ["/archive", "/404"].includes(pathname);

  return (
    <div
      css={{
        ...flex({
          justifyContent: "space-between",
          alignItems: "center",
        }),
      }}>
      <Menu {...pickElmAttrs(props)}>
        <MenuItem>
          <Link
            to="/"
            css={mq(["lg"], {
              display: isArchiveOrNotFound ? "block" : "none",
              fontSize: [ds.size["2xl"], ds.size["3xl"]],
            })}>
            {APP_META.TITLE}
          </Link>
        </MenuItem>
      </Menu>

      <Menu
        css={
          isArchiveOrNotFound
            ? mq(["sm"], {
                display: ["none", "block"],
                marginLeft: ds.spacing["5"],
              })
            : {}
        }
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
