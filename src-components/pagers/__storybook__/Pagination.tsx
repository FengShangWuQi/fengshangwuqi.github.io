import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { Pagination } from "..";

export default () => {
  return (
    <div>
      <Pagination total={100} size={10} offset={10} />

      <EditLink path="src-components/pagers/Pagination.tsx" />
    </div>
  );
};
