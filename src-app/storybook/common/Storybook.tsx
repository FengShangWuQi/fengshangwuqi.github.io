import React from "react";

import { useMatch } from "src-core/router";

import { groupModuleCompList } from "../templates";

export const Storybook = () => {
  const {
    params: { group, module, component },
  } = useMatch();

  const SB = groupModuleCompList[group][module][component];

  return <SB />;
};
