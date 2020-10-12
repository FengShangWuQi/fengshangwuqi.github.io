import React from "react";
import { Link } from "gatsby";
import { border } from "polished";
import { Dictionary } from "lodash";

import { useDesignSystem } from "src-core/ds";
import { toSearchString } from "utils";

import { Menu, MenuItem, MenuMode } from "src-components/navigation/Menu";

import { Container } from "../common/Layout";

export const SideBar = ({
  group,
  modules,
}: {
  group: string;
  modules: Dictionary<string[]>;
}) => {
  const ds = useDesignSystem();

  return (
    <Container
      css={{
        ...border("right", 1, "solid", ds.color.primary),
      }}>
      {Object.keys(modules).map(module => (
        <div key={module}>
          <div
            css={{
              lineHeight: "32px",
              color: ds.color.secondary,
              fontSize: ds.size.lg,
              fontWeight: "bold",
            }}>
            {module}
          </div>
          <Menu mode={MenuMode.VERTICAL}>
            {modules[module].map(title => (
              <Link
                css={{
                  color: ds.color.text,
                  fontSize: ds.size.sm,
                }}
                key={title}
                to={`/${group}${toSearchString({ module, title })}`}>
                <MenuItem>{title}</MenuItem>
              </Link>
            ))}
          </Menu>
        </div>
      ))}
    </Container>
  );
};
