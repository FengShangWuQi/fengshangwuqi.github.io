import React from "react";
import { Link } from "gatsby";

import { useDesignSystem } from "src-core/ds";
import { border } from "src-core/style";

import { BaseMenu, BaseMenuItem, MenuMode } from "src-components/menus";

import { IDictionary } from "utils/object";

import { Container } from "../common/Layout";

export const SideBar = ({
  group,
  modules,
}: {
  group: string;
  modules: IDictionary<string[]>;
}) => {
  const ds = useDesignSystem();

  return (
    <Container
      css={{
        ...border("right", 1, "solid", ds.color.primary),
        fontSize: ds.size.s,
      }}>
      {Object.keys(modules).map(module => (
        <div key={module}>
          <div
            css={{
              lineHeight: "32px",
              color: ds.color.secondary,
              fontSize: ds.size.m,
              fontWeight: "bold",
            }}>
            {module}
          </div>
          <BaseMenu mode={MenuMode.VERTICAL}>
            {modules[module].map(title => (
              <Link
                css={{
                  color: ds.color.text,
                }}
                key={title}
                to={`/${group}/${module}/${title}`}>
                <BaseMenuItem>{title}</BaseMenuItem>
              </Link>
            ))}
          </BaseMenu>
        </div>
      ))}
    </Container>
  );
};
