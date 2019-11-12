import React from "react";
import { rgba, border } from "polished";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem, colorPalette } from "src-core/ds";
import { grid } from "src-core/style";

export const DefaultThemeDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...grid({
          gridTemplateColumns: "repeat(4, 1fr)",
          gridColumnGap: ds.padding.l,
        }),
      }}>
      <ThemeGroup theme={["primary", "secondary"]} />
      <ThemeGroup theme={["success", "warning", "error", "info"]} />
      <ThemeGroup theme={["text", "textLight"]} />
      <ThemeGroup theme={["bg", "bgLight"]} />
    </div>
  );
};

const ThemeGroup = ({ theme }: { theme: string[] }) => {
  const ds = useDesignSystem();

  const { color } = ds;

  return (
    <div>
      {theme.map(value => (
        <ThemeBlock
          key={value}
          css={{
            fontSize: ds.fontSize.sm,
            background: color[value as keyof typeof color],
          }}>
          {value.toUpperCase()}
        </ThemeBlock>
      ))}
    </div>
  );
};

const ThemeBlock = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        ...border(1, "solid", rgba(colorPalette.black, 0.12)),
        paddingLeft: ds.padding.s,
        height: 40,
        lineHeight: "40px",
        color: ds.colorPalette.white,
      }}>
      {children}
    </div>
  );
};
