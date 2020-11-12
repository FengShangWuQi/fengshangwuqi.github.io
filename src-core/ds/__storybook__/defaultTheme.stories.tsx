import React from "react";
import { rgba, border } from "polished";

import { useDesignSystem, colorPalette } from "src-core/ds";
import { grid } from "src-core/style";
import { pickElmAttrs } from "utils/pickElmAttrs";

export const DefaultThemeDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...grid({
          gridTemplateColumns: "repeat(4, 1fr)",
          gridColumnGap: ds.spacing[6],
        }),
      }}>
      <Group theme={["primary", "secondary"]} />
      <Group theme={["success", "warning", "error", "info"]} />
      <Group theme={["text", "textLight"]} />
      <Group theme={["bg", "bgLight"]} />
    </div>
  );
};

const Group = ({ theme }: { theme: string[] }) => {
  const ds = useDesignSystem();

  const { color } = ds;

  return (
    <div>
      {theme.map(value => (
        <Block
          key={value}
          css={{
            fontSize: ds.size.sm,
            background: color[value as keyof typeof color],
          }}>
          {value.toUpperCase()}
        </Block>
      ))}
    </div>
  );
};

const Block = ({ children, ...otherProps }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        ...border(1, "solid", rgba(colorPalette.black, 0.12)),
        paddingLeft: ds.spacing[2],
        height: 40,
        lineHeight: "40px",
        color: ds.colorPalette.white,
      }}>
      {children}
    </div>
  );
};
