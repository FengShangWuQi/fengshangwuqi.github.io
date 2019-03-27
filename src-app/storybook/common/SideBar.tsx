import React from "react";

import { useDesignSystem } from "src-core/ds";
import { useMatch, Link } from "src-core/router";

import { padding } from "src-core/style";

import { groupModuleCompList } from "../templates";

export const SideBar = () => {
  const ds = useDesignSystem();
  const {
    params: { group },
  } = useMatch();

  const currGroup = groupModuleCompList[group];

  return (
    <Container>
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
                to={`${moduleName}/${compName}`}>
                {compName}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

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
      {children}
    </div>
  );
};
