import React from "react";
import { Link } from "gatsby";
import { border } from "polished";
import { Dictionary } from "lodash";

import { useDesignSystem } from "src-core/ds";
import { toSearchString } from "utils";

import { Menu, MenuItem, MenuMode } from "src-components/navigation/Menu";

import { Container } from "../common/Layout";

export const SideBar = ({
  pathPrefix,
  modules,
}: {
  pathPrefix: string;
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
            {modules[module].map(name => (
              <Link
                css={{
                  color: ds.color.text,
                  fontSize: ds.size.sm,
                }}
                key={name}
                to={`${pathPrefix}${toSearchString({ module, name })}`}>
                <MenuItem>{name}</MenuItem>
              </Link>
            ))}
          </Menu>
        </div>
      ))}
    </Container>
  );
};
