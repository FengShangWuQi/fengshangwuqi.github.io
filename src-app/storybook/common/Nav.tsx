import React from "react";

import { useDesignSystem } from "src-core/ds";
import { padding } from "src-core/style";

import { IDictionary } from "utils/object";

export const Nav = ({ modules }: { modules: IDictionary<string[]> }) => {
  return (
    <Container>
      {Object.keys(modules).map(moduleName => (
        <div key={moduleName}>
          <div>{moduleName}</div>
          <div>
            {modules[moduleName].map(compName => (
              <div key={compName}>{compName}</div>
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
