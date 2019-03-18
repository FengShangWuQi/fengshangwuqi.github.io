import React from "react";

export default () => {
  groups.components.keys().forEach((req: string) => console.log(req));

  return <h2>__storybook__</h2>;
};

const groups = {
  core: (require as any).context(
    "src-core",
    true,
    /\/__storybook__\/(.+)\.tsx$/,
  ),
  components: (require as any).context(
    "src-components",
    true,
    /\/__storybook__\/(.+)\.tsx$/,
  ),
};
