import React from "react";

import { useMatch } from "src-core/router";

import { flex, position, size, margin } from "src-core/style";

import { groupModuleCompList } from "../templates";
import { SideBar } from "./SideBar";

export const Storybook = () => {
  const {
    params: { group, module, component },
  } = useMatch();

  const SB = groupModuleCompList[group][module][component];

  return (
    SB && (
      <div
        css={{
          ...flex({}),
          ...position("relative"),
          ...margin(0, "auto"),
          ...size("100%"),
          marginTop: 40,
          maxWidth: 1200,
        }}>
        <SideBar group={group} />
        <SB />
      </div>
    )
  );
};
