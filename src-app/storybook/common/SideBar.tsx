import React from "react";

import { useDesignSystem } from "src-core/ds";
import { Link } from "src-core/router";

import { padding } from "src-core/style";

import { groupModuleCompList } from "../templates";

export const SideBar = ({ group }: { group: string }) => {
  const ds = useDesignSystem();

  const currGroup = groupModuleCompList[group];

  return (
    <div
      css={{
        ...padding(10),
        marginRight: 40,
        width: 224,
        height: "100%",
        fontSize: ds.size.s,
        color: ds.color.bg,
        background: ds.color.primary,
      }}>
      {Object.keys(currGroup).map(moduleName => (
        <div key={moduleName}>
          <div>{moduleName}</div>
          <div>
            {Object.keys(currGroup[moduleName]).map(compName => (
              <Link
                css={{
                  color: ds.color.bg,
                }}
                key={compName}
                to={`/${group}/${moduleName}/${compName}`}>
                {compName}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
