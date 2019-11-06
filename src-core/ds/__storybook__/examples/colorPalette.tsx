import React from "react";
import { lighten, darken, rgba, border } from "polished";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { randomNum } from "utils";

import { colorPalette } from "../../colorPalette";

export const ColorPaletteDemo = () => {
  const ds = useDesignSystem();

  return (
    <div>
      {Object.keys(colorPalette).map(color => {
        const value = colorPalette[color as keyof typeof colorPalette];

        return (
          <div key={color}>
            <div
              css={{
                marginTop: ds.padding.l,
                marginBottom: ds.padding.s,
                fontSize: ds.size.s,
              }}>
              {color.toUpperCase()}
            </div>
            {color === "black" || color === "white" ? (
              <ColorBlock
                css={{
                  ...border(1, "solid", rgba(colorPalette.black, 0.12)),
                  background: value,
                }}
              />
            ) : (
              <ColorGroup color={value} />
            )}
          </div>
        );
      })}
    </div>
  );
};

const ColorGroup = ({ color }: { color: string }) => {
  const colorArr = [
    darken(0.2, color),
    darken(0.15, color),
    darken(0.1, color),
    darken(0.05, color),
    color,
    lighten(0.05, color),
    lighten(0.1, color),
    lighten(0.15, color),
    lighten(0.2, color),
    lighten(0.25, color),
    lighten(0.3, color),
  ];

  const randomIndex = randomNum(0, 10);

  return (
    <div
      css={{
        ...flex({}),
      }}>
      {colorArr.map((background, index) => (
        <ColorBlock
          key={background}
          css={{
            ...(index === randomIndex && {
              borderRadius: "50%",
            }),
            background,
          }}></ColorBlock>
      ))}
    </div>
  );
};

const ColorBlock = ({ ...otherProps }) => (
  <div
    {...pickElmAttrs(otherProps)}
    css={{
      width: 64,
      height: 64,
    }}></div>
);
