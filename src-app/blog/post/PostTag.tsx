import React from "react";
import { padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { pickElmAttrs } from "utils/pickElmAttrs";

export interface ITag {
  color: string;
  bg: string;
  children: React.ReactNode;
}

const useTagTheme = (tag: string) => {
  switch (tag) {
    case "React":
      return ["#5fd9fb", "#1a1c22"];
    case "CSS":
      return ["#ffffff", "#9c8886"];
    case "HTML":
      return ["#ffffff", "#3c790a"];
    case "Git":
      return ["#ffffff", "#F54D27"];
    case "Ubuntu":
      return ["#ffffff", "#DD4814"];
    case "Vim":
      return ["#BFBFBF", "#287F00"];
    case "Mini-Program":
      return ["#ffffff", "#605AB0"];
    case "Extension":
      return ["#ffffff", "#1a73e8"];
    default:
      return ["#606570", "#d6d9e0"];
  }
};

export const PostTag = ({ tag }: { tag: string }) => {
  const [color, bg] = useTagTheme(tag);

  return (
    <Tag
      css={{
        marginRight: 4,
        fontWeight: "bold",
      }}
      color={color}
      bg={bg}>
      #{tag}
    </Tag>
  );
};

const Tag = ({ color, bg, children, ...otherProps }: ITag) => {
  const ds = useDesignSystem();

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        ...padding(2, 5),
        display: "inline-block",
        fontSize: ds.size.xs,
        borderRadius: ds.radius.default,
        color,
        background: bg,
      }}>
      {children}
    </div>
  );
};
