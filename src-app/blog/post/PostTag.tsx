import React from "react";

import { Tag } from "src-components/tags";

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
      color={color}
      bg={bg}
      style={{
        marginRight: 4,
        fontWeight: "bold",
      }}>
      #{tag}
    </Tag>
  );
};
