import React from "react";

import { Pagination } from "..";

export default () => {
  return (
    <div>
      <Pagination total={100} size={10} offset={10} />
    </div>
  );
};
