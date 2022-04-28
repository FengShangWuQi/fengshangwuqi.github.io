import React from "react";

import { userSelect } from "../user-select";

export const UserSelectDemo = () => (
  <p
    css={{
      ...userSelect("none"),
    }}>
    user-select
  </p>
);
