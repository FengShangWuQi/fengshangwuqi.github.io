import React from "react";
import { rgba, border } from "polished";
import { random, startCase } from "lodash";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { grid, flex } from "src-core/style";

type multipleColor =
  | "gray"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "teal"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const ColorPaletteDemo = () => {
  const ds = useDesignSystem();

  const { colorPalette } = ds;
  const { transparent, white, black, ...otherColor } = colorPalette;

  return (
    <div>
      <div
        css={{
          ...grid({
            gridTemplateColumns: "repeat(2, 120px)",
          }),
        }}>
        {["white", "black"].map(color => (
          <Group key={color} color={color}>
            <Block
              css={{
                ...border(1, "solid", rgba(black, 0.12)),
                background: color,
              }}
            />
          </Group>
        ))}
      </div>

      {Object.keys(otherColor).map(color => {
        const value = otherColor[color as multipleColor];
        const randomIndex = random(8);

        return (
          <Group key={color} color={color}>
            <div
              css={{
                ...flex({}),
              }}>
              {Object.values(value).map((bg, index) => (
                <Block
                  key={bg}
                  css={{
                    ...(index === randomIndex && {
                      borderRadius: "50%",
                    }),
                    background: bg,
                  }}></Block>
              ))}
            </div>
          </Group>
        );
      })}
    </div>
  );
};

const Group = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => {
  const ds = useDesignSystem();

  return (
    <div>
      <div
        css={{
          marginTop: ds.spacing[5],
          marginBottom: ds.spacing[1],
          fontSize: ds.fontSize.sm,
        }}>
        {startCase(color)}
      </div>
      <div>{children}</div>
    </div>
  );
};

const Block = ({ ...otherProps }) => (
  <div
    {...pickElmAttrs(otherProps)}
    css={{
      width: 64,
      height: 64,
    }}></div>
);
