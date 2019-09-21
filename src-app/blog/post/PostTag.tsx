import React from "react";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { padding } from "src-core/style";

export interface ITag {
  color: string;
  bg: string;
  children: React.ReactNode;
}

export const PostTag = ({ tag }: { tag: string }) => {
  const getTagProps = (tag: string) => {
    switch (tag) {
      case "React":
        return ["#61DAFB", "#222222"];
      case "CSS":
        return ["#ffffff", "#004f86"];
      case "HTML 5":
        return ["#ffffff", "#F53900"];
      case "Git":
        return ["#413932", "#F54D27"];
      case "Ubuntu":
        return ["#ffffff", "#E95420"];
      case "Vim":
        return ["#ffffff", "#396346"];
      default:
        return ["#606570", "#d6d9e0"];
    }
  };

  const [color, bg] = getTagProps(tag);

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
        borderRadius: ds.radius.base,
        color,
        background: bg,
      }}>
      {children}
    </div>
  );
};
