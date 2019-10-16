import React from "react";
import { rgba } from "polished";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem, colorPalette } from "src-core/ds";
import { grid, border } from "src-core/style";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  const ds = useDesignSystem();

  return (
    <div>
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

      <EditLink path="src-core/ds/colorPalette.ts" />
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
          css={{
            fontSize: ds.size.s,
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
